import React from "react";
import "./HeroSection.css";
import { IonIcon } from '@ionic/react';

// Images
import logoImg from "./assets/images/Logo.png";
import pattern2Img from "./assets/images/pattern-2.svg";
import pattern3Img from "./assets/images/pattern-3.svg";
import shadow1Img from "./assets/images/shadow-1.svg";
import shadow2Img from "./assets/images/shadow-2.svg";

interface HeroSectionProps {
    // Props can go here if needed
}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <section className="hero" id="home" aria-label="home">
            <div className="container">
                <div className="hero-content">
                    <h1 className="headline headline-1 section-title">
                        <span className="span">HACKADEMIC</span>
                    </h1>
                    <p className="hero-text">
                        Dive deep into the world of cybersecurity with us! Our mission is to illuminate the digital shadows,
                        offering readers expert guidance, the latest industry trends, and actionable tips to defend against
                        cyber threats. Whether you're a newbie curious about online safety or a seasoned tech enthusiast
                        seeking advanced knowledge, this is your hub for all things cybersecurity. Stay safe, stay informed,
                        and let's journey together in creating a safer online space for everyone.
                    </p>
                    <div className="input-wrapper">
                        <form action="https://gmail.us21.list-manage.com/subscribe/post?u=524262bca2a94fc24bc68ccd1&amp;id=fda184d9af&amp;f_id=0023dce6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
                            <input type="email" name="EMAIL" placeholder="Type your email address" required className="input-field required email" id="mce-EMAIL" autoComplete="off" />
                            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                                <input type="text" name="b_524262bca2a94fc24bc68ccd1_fda184d9af" tabIndex={-1} value="" />
                            </div>
                            <button type="submit" name="subscribe" className="btn btn-primary" id="mc-embedded-subscribe">
                                <span className="span">Subscribe</span>
                                <IonIcon name="arrow-forward-outline" aria-hidden="true"></IonIcon>
                            </button>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hero-banner">
                    <img src={logoImg} width="327" height="490" alt="Logo" className="w-100" />
                    <img src={pattern2Img} width="27" height="26" alt="shape" className="shape shape-1" />
                    <img src={pattern3Img} width="27" height="26" alt="shape" className="shape shape-2" />
                </div>
                <img src={shadow1Img} width="500" height="800" alt="" className="hero-bg hero-bg-1" />
                <img src={shadow2Img} width="500" height="500" alt="" className="hero-bg hero-bg-2" />
            </div>
        </section>
    );
};

export default HeroSection;
