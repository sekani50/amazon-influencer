import React, { useState } from "react";
import AmazonCaptcha from "./amazonverification/amazonCaptcha";
import AmazonCredential from "./amazonverification/amazonCredential";

const AmazonVerification = () => {
    const [isSuccess, setSuccess] = useState(false)

  return (
    <div className="w-full h-fit pb-10">
        {isSuccess && <AmazonCaptcha setSuccess={setSuccess}/>}
        {!isSuccess && <AmazonCredential setSuccess={setSuccess}/>}
    </div>
  );
};

export default AmazonVerification;
