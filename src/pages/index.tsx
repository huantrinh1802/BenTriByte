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
      strings: ["<strong>First</strong> sentence.", "&amp; a second sentence."],
      typeSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
  <>
  <Header title="Index"/>
  {/* <div className="text-" */}
  <span className="text-black" ref={typeTarget} />;
  <Footer />
  </>
  )}

export default Home;