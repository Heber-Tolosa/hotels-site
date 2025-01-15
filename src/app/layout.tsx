import Image from "next/image";
import { colors } from "../../config/colors";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex justify-between py-4 px-10 absolute w-full">
          <h2 style={{ color: colors.text }} className={`text-xl font-bold `}>
            infotravel
          </h2>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={12} height={12} src="login.svg" alt="login icon" />
            <p
              style={{ color: colors.caption }}
              className={`font-semibold text-[12px] `}
            >
              Iniciar Sessao
            </p>
          </div>
        </div>
        {children}
        <footer className="h-16 bg-white flex justify-center items-center">
          © 2022 | Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
