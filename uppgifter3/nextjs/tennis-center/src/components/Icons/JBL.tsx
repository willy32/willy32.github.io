import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from "../../../public/jeppis_badminton.png";

const JBL = () => {
  return (
    <div style={{cursor: "pointer"}}><Link href={"http://www.jeppisbadminton.com/"}><Image src={img} width={"75"} height={"75"}></Image></Link></div>
  );
};

export default JBL;