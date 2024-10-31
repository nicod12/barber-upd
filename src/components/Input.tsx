import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";


interface Props {
  name: string;
  control: Control<any>;
  label: string;
  error?: FieldError;
  type?: string;
}


const InputForm = ({ name, control, label, error, type }: Props) => {
  return (
    <div className="mb-4 flex items-center gap-2 w-full bebas-neue-regular">
      <label htmlFor={name} className="block text-lg font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          <input type={type} id={name} className={`border rounded p-2 w-full ${error ? "border border-red-500 mt-1" : ""}`} required {...field} />

        }
      />
      {
        error && (
          error && (
            <span className="bg-white mt-1.5 py-0.5 px-1 rounded-lg block">
              <h4 className="text-red-700 text-sm lg:text-md font-bold ml-1">
                {error.message}
              </h4>
            </span>
          )
        )
      }
    </ div>
  )
}

export default InputForm;
