import React from "react";
import classes from "./page.module.css";
import LPHeader from "@/components/lpItems/LPHeader";

function page() {
  return (
    <>
      <LPHeader transparent={false} />
      <div className={classes.container}></div>
    </>
  );
}

export default page;
