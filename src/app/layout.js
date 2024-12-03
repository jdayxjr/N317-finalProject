import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Japan Travel | Discover More",
  description: "Explore the Land of the Rising Sun, where ancient traditions meet modern innovation. From serene temples and bustling cities to scenic landscapes and vibrant culture, embark on an unforgettable journey through Japan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
