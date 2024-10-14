import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const MyLayout = ({ children }) => {
  return (
    <div>
      {/* <header className="appbar_holder" id="header">
        <Navbar />
      </header> */}
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyLayout;
