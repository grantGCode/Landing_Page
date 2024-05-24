import { Inter } from "next/font/google";
import StyledComponentsRegistry from './lib/registry'
import { HomePageStyles } from "./components/HomePageStyles";
import './styles.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fundemental Web Design Landing Page",
  description: "Fundamental Web Design is not just a technology shop but a dedicated partner in your business journey. We are committed to working tirelessly, side by side with you, to ensure your online success. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <HomePageStyles>
              {children}
            </HomePageStyles>
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
