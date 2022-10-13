import Head from 'next/head';
import React from 'react';
import Topbar from '../blocks/Topbar/Topbar';
import Card from '../components/Card/Card';
import CardContainer from '../components/Card/CardContainer';
import MainContent from '../components/MainContent/MainContent';

const news = () => {
  return (
    <div>
        <Head>
            <title>TennisCenter Nyhter</title>
            <meta name="description" content="And thats how the news goes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />
        <MainContent>
            <CardContainer>
                <Card>
                    <h1>Aktuelt</h1>
                    <p>Vi flyttar till et nytt bokningssystem Playtomic 25.5.</p>
                    <p>Boka dina skift enkelt genom sidan playtomic.io</p>
                </Card>
            </CardContainer>
        </MainContent>
    </div>
  );
};

export default news;