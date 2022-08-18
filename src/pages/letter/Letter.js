import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./letter.css";
import CEO from "../../assets/img/CEO.jpg";

const Letter = () => {
  return (
    <>
      <Header signin={true} />
      <div className="letter_container">
        <h1>
          A letter from <br></br>Director of Partnerships
        </h1>
        <div className="centerItems mb-3">
          <img className="ceo_img" src={CEO} alt="CEO" />
        </div>
        <p>
          As a roadaccident victim who lost my sister in a car crash, I am very
          passionate about road safety issues, especiallyprotecting the
          vulnerable on the streets, pedestrains, including children and the
          elderly<br></br>
          <br></br>
          Over the last five years, my team have worked with many amazing
          companies on a number of road safety projects. We are excited about
          our latest project, an online driver training curriculum with the
          National Road Safety Authority and the Ministry of Transport in Ghana
          (Used by over 50,000 professional drivers with the vision to be used
          by a million professional drivers in Africa by the 2025.<br></br>
          <br></br>
          My team and I are excited to partner with individuals and
          organizations to work together to keep our streets safe. Imagine an
          Africa with Zero road crashes and injries! That is my mission
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Letter;
