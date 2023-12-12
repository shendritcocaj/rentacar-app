import React from "react";
import "./aboutus.css";
import aboutimg from "../../../public/aboutimg.png";
import aboutimg1 from "../../../public/mercedes-cklas.png";

const AbouttUs = () => {
  return (
    <div id="aboutus" className="about-us">
      <p className="about-title">Per Ne</p>
      <div className="content-wrapper">
        <div className="about-content">
          <p className="aboutus-title">Mirë se vini Rent a Car te ROBERTI!</p>
          <p className="aboutus-text">
            Faleminderit që vizituat faqen tonë, ku ofrojmë shërbime të
            shkëlqyera të 'Rent a Car' nën emrin ROBERTI. Ne kemi një pasion për
            udhëtimin dhe synojmë të bëjmë këtë përvojë tërheqëse dhe lehtë për
            klientët tanë të nderuar në të gjithë rajonin. ROBERTI është një
            kompani e specializuar në jomarrëveshje makinash, e krijuar me
            qëllim që të ofrojë zgjidhje cilësore dhe efikase për nevojat e
            udhëtuesve tanë. Flitet për një flotë të përzgjedhur me kujdes të
            makinave të reja dhe të mirëmbajtura që sigurojnë një udhëtim të
            sigurt dhe të këndshëm.
          </p>
        </div>
        <img src={aboutimg} alt="a" />
      </div>
      <div className="about-bottom-text">
        <img src={aboutimg1} alt="a" />
        <div className="about-content-1">
          <p className="aboutus-title-1">Çfarë na dallon nga te tjeret?</p>
          <p className="aboutus-text">
            Çfarë na dallon është përkushtimi ndaj cilësisë dhe shërbimit të
            shkëlqyeshëm ndaj klientëve tanë. Me një ekip të përkushtuar dhe
            miqësor, ju sigurojmë që të keni një përvojë të paharrueshme me
            shërbimet tona. Stafi ynë i trajnuar është gati për të përgjigjur
            çdo pyetje dhe për të ju ndihmuar të zgjidhni automjetin e duhur për
            udhëtimin tuaj. Për më tepër, ROBERTI ofron çmime konkurruese dhe
            ofertat e veçanta për të bërë që kjo përvojë të jetë jo vetëm e
            këndshme, por edhe e përballueshme për të gjithë. Ndaj, nëse jeni në
            kërkim të një makinë të re dhe të përdorur me kujdes për udhëtimin
            tuaj, jemi këtu për ju!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbouttUs;
