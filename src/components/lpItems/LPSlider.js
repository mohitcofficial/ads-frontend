"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AhemdabadImage from "../../../public/images/Ahemdabad/Ahemdabad.jpeg";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import DelhiImage from "../../../public/images/Delhi/Delhi.jpg";
import HaryanaImage from "../../../public/images/Gurgaon/Gurgaon.jpg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import MaharashtraImage from "../../../public/images/Mumbai/Mumbai.jpg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import ConnaughtPlaceImage from "../../../public/images/services/Delhi/ConnaughtPlace.jpeg";
import classes from "./LPSlider.module.css";

import DwarkaImage from "../../../public/images/services/Delhi/Dwarka.jpeg";
import LajpatNagarImage from "../../../public/images/services/Delhi/LajpatNagar.jpeg";
import NehruPlaceImage from "../../../public/images/services/Delhi/NehruPlace.jpeg";
import PitampuraImage from "../../../public/images/services/Delhi/Pitampura.jpeg";
import RohiniImage from "../../../public/images/services/Delhi/Rohini.jpg";
import SaketImage from "../../../public/images/services/Delhi/Saket.jpg";

import SohnaRdImage from "../../../public/images/services/Gurgaon/SohnaRd.webp";
import CyberCityImage from "../../../public/images/services/Gurgaon/CyberCity.webp";
import Sector43Image from "../../../public/images/services/Gurgaon/Sector43.webp";
import Sector44Image from "../../../public/images/services/Gurgaon/Sector44.webp";
import UdhyogViharImage from "../../../public/images/services/Gurgaon/UdyogVihar.webp";
import UdhyogViharPhase5Image from "../../../public/images/services/Gurgaon/UdyogViharPhase5.webp";

import NoidaFMRoadImage from "../../../public/images/services/Noida/FMRoad.webp";
import NoidaSector2Image from "../../../public/images/services/Noida/Sector2.webp";
import NoidaSector2MetroImage from "../../../public/images/services/Noida/Sector2Metro.webp";
import NoidaSector16Image from "../../../public/images/services/Noida/Sector16.webp";
import NoidaSector62Image from "../../../public/images/services/Noida/Sector62.webp";
import NoidaSector63Image from "../../../public/images/services/Noida/Sector63.webp";
import NoidaSector132Image from "../../../public/images/services/Noida/Sector132.webp";
import NoidaVyaparMargImage from "../../../public/images/services/Noida/VyaparMarg.webp";

import BangaloreCBIRoadImage from "../../../public/images/services/Bangalore/CBIRoad.webp";
import BangaloreHMTLayoutImage from "../../../public/images/services/Bangalore/HMTLayout.webp";
import BangaloreIndiranagarImage from "../../../public/images/services/Bangalore/Indiranagar.webp";
import BangaloreKormangalaImage from "../../../public/images/services/Bangalore/Kormangala.webp";
import BangaloreKrishnappaBlockImage from "../../../public/images/services/Bangalore/KrishnappaBlock.webp";
import BangaloreWhiteFieldImage from "../../../public/images/services/Bangalore/WhiteField.webp";

import LPModal from "../lpItems/LPModal";

function LPSlider({ name = "India" }) {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const data = {
    India: [
      {
        image: DelhiImage,
        name: "Delhi",
        price: 799,
      },
      {
        image: HaryanaImage,
        name: "Gurgaon",
        price: 799,
      },
      {
        image: NoidaImage,
        name: "Noida",
        price: 799,
      },
      {
        image: BangaloreImage,
        name: "Bangalore",
        price: 799,
      },
      {
        image: MaharashtraImage,
        name: "Mumbai",
        price: 799,
      },
      {
        image: KolkataImage,
        name: "Kolkata",
        price: 799,
      },
      {
        image: AhemdabadImage,
        name: "Ahemdabad",
        price: 799,
      },
    ],
    Delhi: [
      {
        image: SaketImage,
        name: "Saket",
        price: 799,
      },
      {
        image: NehruPlaceImage,
        name: "Nehru Place",
        price: 799,
      },
      {
        image: ConnaughtPlaceImage,
        name: "Connaught Place",
        price: 799,
      },
      {
        image: RohiniImage,
        name: "Rohini",
        price: 799,
      },
      {
        image: PitampuraImage,
        name: "Pitampura",
        price: 799,
      },
      {
        image: DwarkaImage,
        name: "Dwarka",
        price: 799,
      },
      {
        image: LajpatNagarImage,
        name: "Lajpat Nagar",
        price: 799,
      },
    ],
    Gurgaon: [
      {
        image: SohnaRdImage,
        name: "Sector-48 ,Sohna Road",
        price: 699,
      },
      {
        image: UdhyogViharImage,
        name: "Udhyog VIhar",
        price: 799,
      },
      {
        image: UdhyogViharPhase5Image,
        name: "Udyog Vihar Phase 5",
        price: 799,
      },
      {
        image: Sector43Image,
        name: "Sector 43",
        price: 799,
      },
      {
        image: CyberCityImage,
        name: "Cyber City",
        price: 999,
      },
      {
        image: Sector44Image,
        name: "Sector 44",
        price: 799,
      },
      {
        image: Sector44Image,
        name: "Golf Course Road",
        price: 799,
      },
    ],
    Noida: [
      {
        image: NoidaSector2Image,
        name: "Sector 2",
        price: 699,
      },
      {
        image: NoidaSector2MetroImage,
        name: "Sector-02, Near 15 (Metro)",
        price: 799,
      },
      {
        image: NoidaSector63Image,
        name: "Sector 63",
        price: 799,
      },
      {
        image: NoidaFMRoadImage,
        name: "FM Road",
        price: 799,
      },
      {
        image: NoidaVyaparMargImage,
        name: "Vyapar Marg, Sector 3",
        price: 999,
      },
      {
        image: NoidaSector62Image,
        name: "Sector 62",
        price: 799,
      },
      {
        image: NoidaSector16Image,
        name: "Sector 16",
        price: 799,
      },
      {
        image: NoidaSector132Image,
        name: "Sector 132",
        price: 799,
      },
    ],
    Bangalore: [
      {
        image: BangaloreCBIRoadImage,
        name: "CBI ROAD Bangalore",
        price: 799,
      },
      {
        image: BangaloreHMTLayoutImage,
        name: "HMT Layout Bangalore",
        price: 799,
      },
      {
        image: BangaloreKrishnappaBlockImage,
        name: "Krishnappa Block",
        price: 799,
      },
      {
        image: BangaloreIndiranagarImage,
        name: "Indiranagar",
        price: 899,
      },
      {
        image: BangaloreKormangalaImage,
        name: "Koramangala",
        price: 699,
      },
      {
        image: BangaloreWhiteFieldImage,
        name: "Whitefield",
        price: 799,
      },
    ],
  };
  const fontSize = { lg: 28, md: 24, sm: 24, xs: 24 };
  const fontSize2 = { lg: 13, md: 12, sm: 12, xs: 12 };
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>
        Most
        <span>Prefered Locations</span>
        in {name}
      </h2>
      <div className={classes.innerContainer}>
        <div className={classes.rightBox}>
          <Slider ref={sliderRef} {...settings}>
            {data[name]?.map((item, index) => (
              <LPModal key={index}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    src={item.image}
                    alt="Image"
                    fill={true}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw"
                  />
                  <div className={classes.content}>
                    <p className={classes.name}>{item.name}</p>
                    <p className={classes.text}>
                      Starting at
                      <span className={classes.price}>
                        <CurrencyRupeeIcon sx={{ fontSize: fontSize2 }} />
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </LPModal>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <LPModal>
          <button className={classes.visitAllButton}>
            Visit all Virtual Office locations
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </button>
        </LPModal>
      </div>
    </div>
  );
}

export default LPSlider;
