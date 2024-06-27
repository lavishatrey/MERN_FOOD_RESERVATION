import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Lavish Eats, where gourmet dining meets ultimate convenience. Our app connects you to a curated selection of the finest restaurants, delivering exquisite dishes right to your doorstep. Whether you're craving a quick bite or planning a lavish feast, Lavish Eats ensures a seamless and swift delivery experience, turning every meal into a celebration of taste, quality, and luxury. Enjoy the art of fine dining from the comfort of your home with Lavish Eats. Bon appétit!
            </p>
            <ScrollLink to="menu" spy={true} smooth={true} duration={500}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </ScrollLink>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
