import React from "react";
import {useTheme} from "next-themes";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Typed from "typed.js";


const Home = () => {
  // const {theme, setTheme} = useTheme();
  const typeTarget = React.useRef(null);
  
  React.useEffect(() => {
    //@ts-ignore
    const typed = new Typed(typeTarget.current, {
      strings: ["<strong>First</strong> sentence.", "<strong>First</strong> time?"],
      typeSpeed: 100,
      backSpeed: 50,
      smartBackspace: true,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
  <>
  <Header title="Home Page"/>
  {/* <div className="text-" */}
  <span className="text-black" ref={typeTarget} />;
  <Footer />
  </>
  )}

export default Home;