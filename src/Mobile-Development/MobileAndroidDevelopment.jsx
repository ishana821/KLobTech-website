import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
Outlet;
import reactImg from "./assets/react.png";
import flutterImg from "./assets/flutter.png";
import androidImg from "./assets/android.png";
import appleImg from "./assets/apple.png";
import mobileIMG from "./assets/mobile.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";

import "../webIndex.css";
function Mad() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={mobileIMG} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Mobile App Development</h1>
          </div>

          <p className="heroDescription">
            KLobTech is a trailblazer in mobile app development, offering
            innovative and customized solutions to meet the unique needs of our
            clients. Our expert team focuses on blending creativity with
            functionality to deliver apps that stand out in today’s competitive
            market. Client satisfaction is at the heart of everything we do, and
            we are dedicated to transforming ideas into seamless digital
            experiences.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Mobile App Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we understand that every business is unique. That’s
                why we deliver custom mobile apps that align perfectly with your
                goals, ensuring your app resonates with your brand identity and
                audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we understand that every business is unique. That’s
                why we deliver custom mobile apps that align perfectly with your
                goals, ensuring your app resonates with your brand identity and
                audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we understand that every business is unique. That’s
                why we deliver custom mobile apps that align perfectly with your
                goals, ensuring your app resonates with your brand identity and
                audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we understand that every business is unique. That’s
                why we deliver custom mobile apps that align perfectly with your
                goals, ensuring your app resonates with your brand identity and
                audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we understand that every business is unique. That’s
                why we deliver custom mobile apps that align perfectly with your
                goals, ensuring your app resonates with your brand identity and
                audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we understand that every business is unique. That’s
                why we deliver custom mobile apps that align perfectly with your
                goals, ensuring your app resonates with your brand identity and
                audience.
              </p>
            </div>
          </div>

          {/* <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Skilled Development Team
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Our team comprises skilled professionals with extensive
                experience in mobile app development. From strategy to
                execution, we use the latest technologies and best practices to
                deliver cutting-edge applications.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Customer-Centric Approach
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Your satisfaction is our priority. We work closely with you at
                every step, incorporating your feedback to create apps that not
                only meet but exceed expectations.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Scalable and Robust Solutions
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                We specialize in building mobile apps that grow with your
                business. Whether it’s for startups or large enterprises, our
                scalable solutions ensure seamless performance as your user base
                expands.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                On-Time, Budget Delivery
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                With a strong track record of timely and cost-efficient project
                deliveries, KLobTech ensures you get the best value for your
                investment without compromising on quality.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                End-to-End Support
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                From conceptualization to launch and beyond, we provide
                comprehensive support. Whether it’s updates, maintenance, or new
                features, we ensure your app stays ahead in the competitive
                landscape.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mobileImageGridContainer">
        <div className="gridTitleArea">
          <p className="mobileGridTitle">
            We Specialize in the Following Technologies
          </p>
        </div>
        <div className="mobileGridArea">
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                React Native
              </p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/mad/react">
                <img src={reactImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Flutter</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/mad/react">
                <img src={flutterImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Android</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/mad/react">
                <img src={androidImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>iOS</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/mad/react">
                <img src={appleImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default Mad;
