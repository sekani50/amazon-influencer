import React from "react";
import Container from "../container/container";

import Basic from "./subcategories/basic";
import Professional from "./subcategories/professional";
import Business from "./subcategories/business";
const Subscription = () => {
  
  return (
    <Container>
      <div className="w-full h-full px-2  sm:px-6 bg-white pt-4 sm:pt-16">
        <div className="w-full px-0 sm:px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
         <Basic/>
         <Professional/>
         <Business/>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
