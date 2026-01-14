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
  title: "Best Virtual Offices in Noida",
  description:
    "Discover the finest virtual office solutions in Noida with Virtualxcel. Secure a prestigious business address and elevate your company's presence.",
  keywords: [
    "virtual office Noida",
    "virtual office in Noida",
    "virtual office address Noida",
    "virtual office Haryana",
    "virtual office in Noida",
    "best office in Noida",
    "Virtual Office",
    "Virtual Office Address",
    "Virtual Office Address",
    "Premium Virtual Offce",
    "Virtual Office near me",
    "Virtual Office for Startups",
    "cheapest virtual office in Noida",
    "virtual office in Noida Cybercity",
    "virtual office in Noida Sector",
    "virtual office solutions Noida",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner name={"Noida"} />
        <LPSlider name={"Noida"} />
        <LPPriceItem />
        <ProcessFlowBar />
        <OnDemandServices />
        <ECommercePlatforms />
        <WhyUs />
        <VirtualOfficeBenefits />
        <ReviewSlider />
      </div>
      <LPFooter />
      <WhatsappSticker />
    </>
  );
}

export default page;
