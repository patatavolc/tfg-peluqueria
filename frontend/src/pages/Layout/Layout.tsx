import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import type { ReactNode } from "react";
import "./Layout.css";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-content">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer >
        <Footer />
      </footer>
    </div>
  );
}
