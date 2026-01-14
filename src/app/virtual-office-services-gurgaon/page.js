import LPFooter from "@/components/lpItems/LPFooter";
import LPHeader from "@/components/lpItems/LPHeader";
import classes from "./page.module.css";
import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import WhyUs from "@/components/items/WhyUs";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import dynamic from "next/dynamic";
import LPBanner from "@/components/lpItems/LPBanner";
import LPSlider from "@/components/lpItems/LPSlider";
import OnDemandServices from "@/components/items/OnDemandServices";
import Disclaimer from "@/components/lpItems/Disclaimer";
import WhatsappSticker from "@/components/items/WhatsappSticker";
import ECommercePlatforms from "@/components/lpItems/ECommercePlatforms";

const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

const ProcessFlowBar = dynamic(
  () => import("../../components/items/ProcessFlowBar"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Virtual Offices in Gurgaon",
  description:
    "Discover the finest virtual office solutions in Gurgaon with Virtualxcel. Secure a prestigious business address and elevate your company's presence.",
  keywords: [
    "virtual office Gurgaon",
    "virtual office Gurugram",
    "virtual office Haryana",
    "virtual office in Gurgaon",
    "best office in Gurgaon",
    "Virtual Office",
    "Virtual Office Address",
    "Premium Virtual Offce",
    "Virtual Office near me",
    "Virtual Office for Startups",
    "cheapest virtual office in gurgaon",
    "virtual office in Gurgaon Cybercity",
    "virtual office in Gurgaon Cyber Hub",
    "virtual office in Sohna Road",
    "virtual office in Golf Course Road",
    "virtual office in Udyog Vihar",
    "virtual office in Sushant Lok",
    "virtual office in Gurgaon Sector 66",
    "virtual office in Gurgaon Sector 43",
    "virtual office solutions Gurgaon",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner name={"Gurgaon"} />
        <LPSlider name={"Gurgaon"} />
        <LPPriceItem />
        <ProcessFlowBar />
        <OnDemandServices />
        <ECommercePlatforms />
        <WhyUs />
        <VirtualOfficeBenefits />
        <ReviewSlider />
      </div>
      <LPFooter />
      <Disclaimer />
      <WhatsappSticker />
    </>
  );
}

export default page;
