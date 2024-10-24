
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
