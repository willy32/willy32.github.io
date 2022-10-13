import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Topbar from '../blocks/Topbar/Topbar';
import MainContent from '../components/MainContent/MainContent';
import LeftSide from '../components/Storycard/LeftSide';
import RightSide from '../components/Storycard/RightSide';
import Storycard from '../components/Storycard/Storycard';
import img from "../../public/pallo.jpg";

const openhours = () => {
  return (
    <div>
        <Head>
            <title>TennisCenter Öppentider</title>
            <meta name="description" content="OPEN TIMES" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />
        <MainContent>
            <Storycard>
                <LeftSide>
                    <h2>Vi har öppet</h2>
                    <p>må - fre</p>
                    <p>kl 8:00 - 22:00</p>
                    <br />
                    <p>lö-sö</p>
                    <p>kl 9:00-22:00</p>
                    <br />
                    <p>I juni och juli</p>
                    <p>kl 9-21</p>
                    <p>övriga tider enligt överenskommelse</p>
                    <br />
                    <h2>På helgerna kundservice vid bokningarna!</h2>
                    <h2>Vi rekommenderar att boka online!</h2>
                </LeftSide>
                <RightSide>
                    <Image src={img}></Image>
                </RightSide>
            </Storycard>
        </MainContent>
    </div>
  );
};

export default openhours;