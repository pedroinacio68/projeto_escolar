import type { Metadata } from "next";
import "./globals.css";
import "./auth-video.css";
import AuthVideoShortcut from "./AuthVideoShortcut";
export const metadata: Metadata = {title:"EduSpace | Gestão Escolar",description:"Plataforma demonstrativa de gestão escolar do Instituto Primavera."};
export default function RootLayout({children}:LayoutProps<"/">){return <html lang="pt-BR"><body>{children}<AuthVideoShortcut/></body></html>}
