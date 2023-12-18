import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Montaga } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Prvider from "./Redux/Prvider" 

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight:"200",
});
const montaga = Montserrat({
  subsets: ["latin"],
  variable: "--montaga",
});
export const metadata: Metadata = {
  title: "Caviar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.variable} ${montaga.variable}`}
        suppressHydrationWarning={true}
      >
         <Prvider>
        <Header  />
        {children}
        <Footer />
        </Prvider>
      </body>
    </html>
  );
}
