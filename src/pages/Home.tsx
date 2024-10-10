import AboutUS from "../components/Home/AboutUS";
import ContactUs from "../components/Home/ContactUs";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <AboutUS />
    </div>
  );
}

export default Home;
