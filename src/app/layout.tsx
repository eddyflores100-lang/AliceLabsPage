import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase:new URL('https://www.alicelabs.site'),
  title:'AliceLabs | Desarrollo web y automatización para tu negocio',
  description:'Webs para captar clientes, automatización de procesos y desarrollo de MVP. Define tu objetivo y recibe una propuesta con alcance, entregables y presupuesto.',
  openGraph:{title:'AliceLabs | De una necesidad a un producto que funciona',description:'Desarrollo web, automatización y MVP con entregables claros.',url:'https://www.alicelabs.site',siteName:'AliceLabs',type:'website'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#050510] text-white m-0 p-0">
        {children}
      </body>
    </html>
  );
}
