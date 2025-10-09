import LPFooter from "@/components/lpItems/LPFooter";
import classes from "./page.module.css";

import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import WhyUs from "@/components/items/WhyUs";
import LPBanner from "@/components/lpItems/LPBanner";
import dynamic from "next/dynamic";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import LPHeader from "@/components/lpItems/LPHeader";
import Disclaimer from "@/components/lpItems/Disclaimer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import OnDemandServices from "@/components/items/OnDemandServices";
import WhatsappSticker from "@/components/items/WhatsappSticker";
import IndependenceDayOffer from "@/components/discount/IndependenceDayOffer";
import CountContainer from "@/components/CountContainer";
import InformationContainer from "@/components/lpItems/InformationContainer";
import ECommercePlatforms from "@/components/lpItems/ECommercePlatforms";
const LPCitiesSlider = dynamic(
  () => import("../components/lpItems/LPCitiesSlider"),
  {
    ssr: false,
  }
);
const ReviewSlider = dynamic(
  () => import("../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);
const ProcessFlowBar = dynamic(
  () => import("../components/items/ProcessFlowBar"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Virtual Office Address Across India",
  description:
    "Discover Virtualxcel: Your gateway to the perfect virtual office address. Elevate your professional presence and expand your business seamlessly.",
  keywords: [
    "Virtual Office",
    "Virtual Office Address",
    "Virtual Office for Startups",
    "Best Virtual Office Address",
    "Virtual office with registered aggrement",
    "Virtual Office Noida",
    "Virtual Office Gurgaon",
    "Virtual Office Bangalore",
    "Virtual Office Chennai",
    "Virtual Office Tamil Nadu",
    "Virtual Office Hyderabad",
    "Virtual Office Services",
    "Rent Virtual Office",
    "Book Virtual Office",
    "virtual office in delhi",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner />
        {/* <IndependenceDayOffer /> */}
        <CountContainer />
        <LPCitiesSlider />
        <LPPriceItem />
        <ProcessFlowBar />
        <OnDemandServices />
        <ECommercePlatforms />
        <WhyUs />
        {/* <VirtualOfficeBenefits /> */}
        <ReviewSlider />
        <FrequentQuestions />
      </div>
      <LPFooter />
      <Disclaimer />
      <WhatsappSticker />
    </>
  );
}

export default page;
