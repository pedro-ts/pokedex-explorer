import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import "./globals.css"; // Se você estiver usando estilos globais (Tailwind ou CSS comum)
import AOSProvider from "@/components/layout/default/AOSProvider/AOSProvider";
import NavBar from "@/components/layout/default/NavBar/NavBar";
import Footer from "@/components/layout/default/Footer/Footer";

// 1. Definindo o metadado da página (Título e Descrição que aparecem na aba do navegador)
export const metadata: Metadata = {
  title: "Meu App Incrível",
  description: "Criado com Next.js e TypeScript",
};

// 2. Definindo a interface para as propriedades (props) do layout
interface RootLayoutProps {
  children: React.ReactNode; // O 'children' representa todas as páginas que vão ficar dentro deste layout
}

// 3. O Componente do Layout
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <AOSProvider>
        <body className="bg-linear-to-tr from-neutral-900 to-neutral-950">
          <header>
            <NavBar />
          </header>

          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </AOSProvider>
    </html>
  );
}
