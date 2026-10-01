import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "@/styles/globals.scss";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata = {
  title: {
    default: "Mustafa Yıldırımçakar | Frontend Developer",
    template: "%s | Mustafa Yıldırımçakar",
  },
  description:
    "Frontend developer building structured, responsive web applications with React, Next.js and JavaScript.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
