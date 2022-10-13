import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from "../../../public/halex.png";

const HL = () => {
  return (
    <div style={{cursor: "pointer"}}><Link href={"http://www.facebook.com/btkhalex/"}><Image src={img} width={"75"} height={"75"}></Image></Link></div>
  );
};

export default HL;