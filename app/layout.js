import Header from "./Components/Header";
import "./globals.css";
import Providers from "./Context/Providers"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
