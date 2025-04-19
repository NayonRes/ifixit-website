import { Arimo, Playfair_Display, Tinos, Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Optimize font loading with display: swap
const arimo = Arimo({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-arimo',
});

const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-playfair',
});

const tinos = Tinos({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-tinos',
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export const metadata = {
  title: "iFixit",
  description: "iFixit Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${arimo.variable} ${playfair_display.variable} ${tinos.variable}`}>
      <body className="font-sans">
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <div className="flex flex-col min-h-screen">
              <header className="appbar_holder" id="header">
                <Navbar />
              </header>
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}