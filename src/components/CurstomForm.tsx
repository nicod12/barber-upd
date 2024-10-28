"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from "zod";
import InputForm from './Input'; // Componente InputForm reutilizable

const schema = z.object({
  date: z.string().refine((value) => {
    const today = new Date();
    const selectedDate = new Date(value);
    today.setHours(0, 0, 0, 0); // Ignorar horas en la comparación
    return selectedDate >= today;
  }, {
    message: "La fecha debe ser hoy o en el futuro.",
  }),

  time: z.string().refine((value) => {
    const [hours, minutes] = value.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;

    const isValid =
      // Rango 1: 10:00 AM (600 minutos) a 1:00 PM (780 minutos)
      (totalMinutes >= 600 && totalMinutes <= 780) ||
      // Rango 2: 4:30 PM (990 minutos) a 8:30 PM (1230 minutos)
      (totalMinutes >= 990 && totalMinutes <= 1230);

    return isValid;
  }, {
    message: "La hora debe ser entre 10:00 AM y 1:00 PM o entre 4:30 PM y 8:30 PM.",
  }),

  phone: z.string()
    .trim()
    .min(7, "El número de teléfono debe tener al menos 7 caracteres")
    .max(14, "El número de teléfono no puede tener más de 14 caracteres")
    .regex(/^[\d+]{7,14}$/, "El número de teléfono solo puede contener dígitos y opcionalmente un '+' al principio"),
});

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  const { control, handleSubmit, formState: { errors }, } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: '',
      time: '',
      phone: ''
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert("Reserva Enviada");
  }



  return (
    <section className='py-16 md:py-32 flex flex-col lg:flex-row items-center lg:items-start gap-14 justify-center'>
      <div>
        <p className="max-w-md md:max-w-3xl px-6 md:px-4 text-center text-[1.5rem] lg:text-[2rem] lg:text-start lg:p-2 bebas-neue-regular">
          ¡No dejes tu look al azar! Reserva tu turno fácilmente en línea y asegúrate de recibir la atención que mereces en el momento que más te convenga. En Tulook barber, tu satisfacción es nuestra prioridad. ¡Te esperamos!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border-2 border-[#C99E10] w-[330px] md:w-[35rem] flex flex-col items-center justify-center p-5 shadow-sm shadow-black'
      >
        <InputForm
          name="date"
          control={control}
          label="Fecha:"
          type="date"
          error={errors.date}
        />

        <InputForm
          name="time"
          control={control}
          label="Hora:"
          type="time"
          error={errors.time}
        />

        <InputForm
          name="phone"
          control={control}
          label="Teléfono:"
          type="text"
          error={errors.phone}
        />

        <div className="w-full mt-4">
          <button
            type="submit"
            className="bg-[#C99E10] text-white font-bold uppercase px-4 py-2 border border-white rounded transition duration-300 ease-in-out hover:bg-[#A9810D] hover:scale-105 w-full"
          >
            Reservar Turno
          </button>

        </div>
      </form>
    </section>
  );
}

export default CustomForm;
