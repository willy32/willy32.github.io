import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from "../../../public/tkj.png";

const TKJ = () => {
  return (
    <div style={{cursor: "pointer"}}><Link href={"http://www.tkj.fi/"}><Image src={img} width={"75"} height={"75"}></Image></Link></div>
  );
};

export default TKJ;