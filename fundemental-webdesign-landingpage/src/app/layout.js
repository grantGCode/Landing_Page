import StyledComponentsRegistry from './lib/registry'
import { HomePageStyles } from "./components/HomePageStyles";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Poppins } from "@next/font/google";
import './styles.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
});

export const metadata = {
  title: "Fundemental Web Design Landing Page",
  description: "Fundamental Web Design is not just a technology shop but a dedicated partner in your business journey. We are committed to working tirelessly, side by side with you, to ensure your online success. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={poppins.className}>
          <StyledComponentsRegistry>
            <HomePageStyles>
              <Navbar />
              {children}
              <Footer />
            </HomePageStyles>
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
