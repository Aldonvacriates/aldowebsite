import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import ScrollToHash from "./ScrollToHash.tsx";

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
