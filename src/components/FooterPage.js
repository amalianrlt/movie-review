import React from "react";
import { Layout } from "antd";
import "../style/scss/HomePage.scss";
import google from "../style/images/google.png";
import apple from "../style/images/apple.png";
import instagram from "../style/images/instagram.png";
import pinterest from "../style/images/pinterest.png";
import facebook from "../style/images/facebook.png";

const { Footer } = Layout;

function FooterPage() {
  return (
    <Layout>
      <Footer>
        <div className="card-footer">
          <div className="desc-footer">
            <h1>MovieFlix</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard. printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard
            </p>
          </div>
          <div className="list-footer">
            <ul>
              <li>Tentang Kami</li>
              <li>Blog</li>
              <li>Layanan</li>
              <li>Pusat Media</li>
            </ul>
          </div>
          <div className="social-footer">
            <div className="download-footer">
              <h5>Download</h5>
              <div className="logo-footer">
                <img style={{ width: "5em" }} src={google} alt="google" />
                <img style={{ width: "5em" }} src={apple} alt="apple" />
              </div>
            </div>
            <div className="icon-footer">
              <h5>Social Media</h5>
              <div className="logo-footer2" style={{padding:"0 3rem"}}>
                <img style={{ width: "2em" }} src={facebook} alt="facebook" />
                <img style={{ width: "2em" }} src={pinterest} alt="pinterest" />
                <img style={{ width: "2em" }} src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
        <h5>Copyright © 2000-202 MovieFlix. All Rights Reserved</h5>
      </Footer>
    </Layout>
  );
}

export default FooterPage;
