import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "My Professional Portfolio",
  description: "Showcasing my skills, projects, and experience",
  icons: {
    icon: '/favicon.ico', // arahkan ke file favicon di public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
