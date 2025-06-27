import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LanguageSelector from "@/components/mode/lang";
import ThemeToggle from "@/components/mode/theme";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title: "Nemamcha Oussama - Dentiste",
  description: "Bienvenue sur le site du Dr. Nemamcha Oussama, votre dentiste de confiance à Guelma. Découvrez nos services dentaires de qualité supérieure et prenez rendez-vous dès aujourd'hui.",
  icons: {
    icon: '/tooth_smile.png',
    shortcut: '/tooth_smile.png',
    apple: '/tooth_smile.png',
  },
  openGraph: {
    title: "Nemamcha Oussama - Dentiste",
    description: "Bienvenue sur le site du Dr. Nemamcha Oussama, votre dentiste de confiance à Guelma. Découvrez nos services dentaires de qualité supérieure et prenez rendez-vous dès aujourd'hui.",
    siteName: "Nemamcha Oussama - Dentiste",
    images: [
      {
        url: "/tooth_smile.png",
        width: 1200,
        height: 630,
        alt: "Dr. Nemamcha Oussama - Dentiste",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LanguageSelector/>
        <ThemeToggle/>
        {children}
      </body>
    </html>
  );
}
