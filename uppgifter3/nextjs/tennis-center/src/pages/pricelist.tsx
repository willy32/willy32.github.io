import Head from 'next/head';
import React from 'react';
import Topbar from '../blocks/Topbar/Topbar';
import Card from '../components/Card/Card';
import CardContainer from '../components/Card/CardContainer';
import MainContent from '../components/MainContent/MainContent';

const pricelist = () => {
  return (
    <div>
        <Head>
            <title>TennisCenter Prislista</title>
            <meta name="description" content="Prices" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />
        <MainContent>
            <CardContainer>
                <Card>
                    <h1>Tennis</h1>
                    <p>8:00 - 16:00 18 €/timme</p>
                    <p>16:00 - 22:00 20 €/timme</p>
                </Card>
                <Card>
                    <h1>Badminton</h1>
                    <p>8:00 - 16:00 16 €/timme</p>
                    <p>16:00 - 22:00 18 €/timme</p>
                </Card>
                <Card>
                    <h1>Bordtennis</h1>
                    <p>8:00 - 22:00 6 €/timme</p>
                </Card>
                <Card>
                    <h1>Squash</h1>
                    <p>8:00 - 16:00 14 €/t</p>
                    <p>16:00 - 22:00 16 €/t</p>
                </Card>
                <Card>
                    <h1>Seriekort</h1>
                    <p>Tennis</p>
                    <p>11 h (må-sö klo 8-16) 180 €</p>
                    <p>11 h (må-sö kl 8-22) 200 €</p>
                    <p>Badminton</p>
                    <p>11 h (må-sö klo 8-16) 160 €</p>
                    <p>11 h (må-sö klo 8-22) 180 €</p>
                </Card>
            </CardContainer>
        </MainContent>
    </div>
  );
};

export default pricelist;