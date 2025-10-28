import Image from "next/image";
import LP from "../../../public/images/VirtualOfficeBanner.jpg";
import LP1 from "../../../public/images/Delhi/DelhiHD.jpg";
import classes from "./LPBanner.module.css";
import LPContactForm from "./LPContactForm";
import LPModal from "./LPModal";
import DelhiImage from "../../../public/images/TrendingLocations/Delhi.png";
import MumbaiImage from "../../../public/images/TrendingLocations/Mumbai.png";
import HyderabadImage from "../../../public/images/TrendingLocations/Hyderabad.png";
import GurgaonImage from "../../../public/images/TrendingLocations/Gurgaon.png";
import NoidaImage from "../../../public/images/TrendingLocations/Noida.png";
import BangaloreImage from "../../../public/images/TrendingLocations/Bangalore.png";
import ChennaiImage from "../../../public/images/TrendingLocations/Chennai.png";

const locationData = [
  {
    name: "New Delhi",
    img: DelhiImage,
  },
  {
    name: "Gurgaon",
    img: GurgaonImage,
  },
  {
    name: "Noida",
    img: NoidaImage,
  },
  {
    name: "Bangalore",
    img: BangaloreImage,
  },
  {
    name: "Mumbai",
    img: MumbaiImage,
  },
  {
    name: "Hyderabad",
    img: HyderabadImage,
  },
  {
    name: "Chennai",
    img: ChennaiImage,
  },
];

function LPBanner({ name = "lp" }) {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        <Image
          className={classes.image}
          src={name === "lp" ? LP : LP1}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={classes.container2}>
        <div className={classes.leftContainer}>
          <h1 className={classes.heading}>
            <span className={classes.heading1}>
              Transform Your Business With our Premium
              <span className={`${classes.gradientText} ${classes.heading2}`}>
                Virtual Offices
              </span>
              PAN India
            </span>
          </h1>
          <div className={classes.subHeading}>
            Set up a virtual office with Virtualxcel at prime locations across
            Pan India. Enjoy premium services, including professional addresses,
            mail handling, and meeting rooms, all without the costs of a
            physical office.
          </div>
          <div className={classes.subHeading2}>Trending Locations</div>
          <div className={classes.locations}>
            {locationData.map((item, index) => (
              <div key={index}>
                <LPModal>
                  <div className={classes.location}>
                    <div className={classes.imageContainer}>
                      <Image
                        className={classes.locationImage}
                        src={item.img}
                        alt="image"
                      />
                    </div>
                    <span className={classes.locationName}>{item.name}</span>
                  </div>
                </LPModal>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.rightContainer}>
          <LPContactForm />
        </div>
      </div>
    </div>
  );
}

export default LPBanner;
