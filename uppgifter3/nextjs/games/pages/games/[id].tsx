import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Games } from "../../components/Interface/Interface"

type Data = {
  rows: Games[]
};

const id:React.FC<Data> = ({rows}) => {
  console.log(rows);
  return (
    <div>
      {
        rows.map((game) => (
          <div key={game.id}>
            <h1>{game.name}</h1>
          </div>
        ))
      }
    </div>
  );
};

export const getServerSideProps:GetServerSideProps = async ({params}: any) => {
    const res = await fetch("http://localhost:3000/api/games/" + params?.id);
    const rows = await res.json();

    return {
      props: {rows}
    }
}

export default id;