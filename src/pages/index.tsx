import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Home() {

  return (
  <>
  <Navbar transparent />
    <main className="profile-page">
          <section className="relative block" style={{ height: 500 }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  // "url('https://wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-18.png')"
                  // eslint-disable-next-line no-template-curly-in-string
                  "url(/img/code-wallpaper-18.png)",
              }}
            />{" "}
          </section>{""}
    </main>
  <Footer />
  </>
  )}
