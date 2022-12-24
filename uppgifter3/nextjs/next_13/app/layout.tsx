import Header from "./components/Header/Header";
import "../styles/globals.css";
import Footer from "./components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
