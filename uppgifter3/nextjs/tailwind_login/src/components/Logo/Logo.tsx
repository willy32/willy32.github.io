import Image from 'next/image';
import React from 'react';

import imgLogo from "../../../public/images/logo.png";

const Logo = () => {
  return (
    <div className="">
        <Image src={imgLogo} width={"200"} height={"200"} alt="Logo" />
    </div>
  );
};

export default Logo;