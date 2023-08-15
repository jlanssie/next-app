import { Header, Footer } from "../components";
import "./layout.scss";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
