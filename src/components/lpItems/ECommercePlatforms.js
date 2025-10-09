import React from "react";
import classes from "./ECommercePlatforms.module.css";
import Image from "next/image";
import AmazonLogo from "../../../public/images/Logos/AmazonLogo.png";
import FlipkartLogo from "../../../public/images/Logos/FlipkartLogo.png";
import MyntraLogo from "../../../public/images/Logos/MyntraLogo.png";
import MeeshoLogo from "../../../public/images/Logos/MeeshoLogo.png";
import ZeptoLogo from "../../../public/images/Logos/ZeptoLogo.png";
import BlinkitLogo from "../../../public/images/Logos/BlinkitLogo.jpeg";

const logos = [
  FlipkartLogo,
  AmazonLogo,
  MyntraLogo,
  ZeptoLogo,
  BlinkitLogo,
  MeeshoLogo,
];

function ECommercePlatforms() {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.heading}>
          Use Our
          <strong>Virtual Office</strong>
          in any E-commerce Platforms
        </div>
        <div className={classes.images}>
          {logos.map((logo, index) => (
            <div key={index} className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={logo}
                fill={true}
                alt=""
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ECommercePlatforms;
