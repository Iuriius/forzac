import "modern-normalize/modern-normalize.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Вишиваний Форзац",
  description: "Ляльки в українському національному вбранні",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
