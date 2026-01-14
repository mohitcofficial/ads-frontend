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
  title: "Best Virtual Offices in Bangalore",
  description:
    "Discover the finest virtual office solutions in Bangalore with Virtualxcel. Secure a prestigious business address and elevate your company's presence.",
  keywords: [
    "virtual office Bangalore",
    "virtual office in Bangalore",
    "virtual office address Bangalore",
    "virtual office Haryana",
    "virtual office in Bangalore",
    "best office in Bangalore",
    "Virtual Office",
    "Virtual Office Address",
    "Virtual Office Address",
    "Premium Virtual Offce",
    "Virtual Office near me",
    "Virtual Office for Startups",
    "cheapest virtual office in Bangalore",
    "virtual office in Bangalore Cybercity",
    "virtual office in Bangalore Sector",
    "virtual office solutions Bangalore",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner name={"Bangalore"} />
        <LPSlider name={"Bangalore"} />
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
