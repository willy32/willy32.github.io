import Head from 'next/head';
import React from 'react';
import Topbar from '../blocks/Topbar/Topbar';
import Card from '../components/Card/Card';
import CardContainer from '../components/Card/CardContainer';
import MainContent from '../components/MainContent/MainContent';

const contacts = () => {
  return (
    <div>
        <Head>
            <title>TennisCenter Kontaktuppgifter</title>
            <meta name="description" content="And thats how the news goes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />
        <MainContent>
            <CardContainer>
                <Card>
                    <h1>Kontakter</h1>
                    <p>Tenniscenter</p>
                    <p>Västerleden 3</p>
                    <p>68600 Jakobstad</p>
                    <p>Tel. +358 44 2362897</p>
                    <p>tenniscenter.pietarsaari@gmail.com</p>
                </Card>
            </CardContainer>
        </MainContent>
    </div>
  );
};

export default contacts;