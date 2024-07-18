import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Go App',
    default: 'Go App'
  },
  description: "Efficiently manage user data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}  
        <Sidebar />  
        </body>
    </html>
  );
}
