import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/footer"
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Japan Travel | Discover More",
  description: "Explore the Land of the Rising Sun, where ancient traditions meet modern innovation. From serene temples and bustling cities to scenic landscapes and vibrant culture, embark on an unforgettable journey through Japan.",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">

        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
