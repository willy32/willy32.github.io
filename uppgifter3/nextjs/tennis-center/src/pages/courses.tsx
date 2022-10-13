import Head from 'next/head';
import React from 'react';
import Topbar from '../blocks/Topbar/Topbar';
import Card from '../components/Card/Card';
import CardContainer from '../components/Card/CardContainer';
import MainContent from '../components/MainContent/MainContent';

const courses = () => {
  return (
    <div>
        <Head>
            <title>TennisCenter Kurser</title>
            <meta name="description" content="Courses" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />
        <MainContent>
            <h1 style={{color: "#fff"}}>Badmintonkurser</h1>
            <p style={{color: "#fff"}}>Tränad av Mohammad Emran</p>
            <CardContainer>
                <Card>
                    <h2>Nybörjarkurs i badminton 9-15 år</h2>
                    <p>Torsdagar 18-19</p>
                    <p>Pris: 60 €/spelare i 16 timmar</p>
                    <p>Start 07.09.2017</p>
                </Card>
                <Card>
                    <h2>Nybörjarkurs i badminton Vuxna</h2>
                    <p>Torsdagar 20-21</p>
                    <p>Pris: €80/spelare i 16 timmar</p>
                    <p>Start 07.09.2017</p>
                </Card>
                <Card>
                    <h2>Badminton introduktionslektion 4 tim 9-15 år</h2>
                    <p>Tid: enligt överenskommelse</p>
                    <p>Pris: €25/spelare</p>
                    <p>I klassen får du lära dig racketgrepp och grundläggande slagträning, grunderna i rörelseteknik, servering och mottagande av en serve.</p>
                    <p>I priset ingår: fält, coachning, fjäderbollar och vid behov en låneracket.</p>
                </Card>
                <Card>
                    <h2>Badminton introduktionslektion 4 tim Vuxna</h2>
                    <p>Tid: enligt överenskommelse</p>
                    <p>Pris: €30/spelare</p>
                    <p>I klassen får du lära dig racketgrepp och grundläggande slagträning, grunderna i rörelseteknik, servering och mottagande av en serve.</p>
                    <p>I priset ingår: fält, coachning, fjäderbollar och vid behov en låneracket.</p>
                </Card>
                <Card>
                    <h2>Badmintonintensivkurs 1 Juniorer 12-16 år</h2>
                    <p>För spelare med liten skicklighet som vill utvecklas och bli konkurrenskraftiga spelare</p>
                    <p>Måndagar från 18:00 till 20:00</p>
                    <p>Torsdagar kl. 19.00-20.00</p>
                    <p>Pris: 60 €/spelare i 16 timmar</p>
                    <p>Start 04.09.2017</p>
                </Card>
                <Card>
                    <h2>Badmintonintensivkurs 2 Racing juniorer</h2>
                    <p>Kursen är avsedd för nationella A- och B-spelare</p>
                    <p>Tisdagar kl. 18.00-20.00</p>
                    <p>Lördagar från 11.00 till 13.00</p>
                    <p>Pris: €80/spelare</p>
                    <p>Start 09.02.2017</p>
                    <p>I priset ingår: banor, 16 timmars coachning, fjäderbollar och vid behov en låneracket</p>
                </Card>
                <Card>
                    <h2>"Familjen är bäst" (Föräldrar eller mor- och farföräldrar + barn)</h2>
                    <p>Pris: 25 €/timme</p>
                    <p>Tid: enligt överenskommelse</p>
                    <p>Familjebadminton är ett trevligt sätt att träna tillsammans med familjen och ett utmärkt sätt att lära känna badminton som sport.</p>
                    <p>I priset ingår: fält, coachning, fjäderbollar och vid behov en låneracket.</p>
                </Card>
            </CardContainer>
        </MainContent>
    </div>
  );
};

export default courses;