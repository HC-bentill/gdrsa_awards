import React from "react";
import Header from "../../components/header/Header";
import "./about.css";
import aboutBgImg from "../../assets/img/aboutbg.png";
import { Button } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header signin={true} />

      <div className="about_container">
        <img className="about_hero" src={aboutBgImg} alt="bg img" />

        <div className="about_text_container">
          <p className="about_header">Our Mission</p>
          <div className="about_underline"></div> <p></p>
          <p className="about_text">
            To make continual driver training accessible to proffessional
            drivers in africa with the help of technology.<br></br>
            <br></br>
            Africa has an unacceptably high fatality rate of 28 deaths per
            100,000 people. Nearly a triple the numbers recorded in global
            North(Europe, Japan, Australia).<br></br>
            <br></br>
            The Ghana Driver and Road Safety Awards (GDRSA) was intended to
            reinforce safe driving habits via training and rewards to reduce
            road accidents. We designed an awards program with various driver-
            defensive training contents as a key part of the awards process. In
            2018 and 2019 we trained over 50,000 drivers through our driver
            awards program and supported winners from the program to lead
            various road safety campaigns in their communities.<br></br>
            <br></br>
            With the pandemic, a lot of activities had to be done online
            including driver training. We realised that available online driver
            training was not inclusive and diverse enough. Armed with that
            information our awards program was redesigned to include a simple
            online driver training. Our driver training program explains complex
            concepts in bite-size videos in English and major African languages.
            <br></br><br></br>A recent report on consumer behaviour revealed that 66% of
            people use their phones in their I -want -to know - moments. With
            over 500 million phone connections in Africa, the vision of the
            GDRSA Foundation is to use technology especially phones to make
            continuous driver training convenient for professional drivers in
            the Sub-Saharan region. We are committed to building a driver
            training program which will raise safer road users committed to
            keeping their community safe.
          </p>
          <p className="about_header">Our Values</p>
          <div className="about_underline"></div>
          <p className="about_text">
            <span>Safety*</span>
            <span>Integrity*</span>
            <span>Continual development*</span>
            <span>Diversity and inclusion*</span>
          </p>
        </div>

        <div className="about_letter_bg">
          <h1>
            A Message from the <br></br>Director of Partnerships
          </h1>
          <Button
            onClick={() => navigate("/letter")}
            className="about_letter_button"
            type="submit"
          >
            Read Full Letter
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
