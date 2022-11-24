import React from 'react';
import useHighscoreQuery from '../_client/queries/useHighscoreQuery';

type Data = {
  id: number,
  name: string,
  score: number
}

const Highscores = () => {

  const {data, isLoading} = useHighscoreQuery();

  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className='m-6 flex flex-col items-center'>
        <table>
          <thead>
            <tr>
              <th className='px-4 py-2 text-left border-b'>#</th>
              <th className='px-4 py-2 text-left border-b'>Name</th>
              <th className='px-4 py-2 text-right border-b'>Milliseconds</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((row: Data, index: number) => (
                <tr key={row.id} className="even:bg-gray-100">
                  <td className='px-4 py-2'>{index + 1}</td>
                  <td className='px-4 py-2'>{row.name}</td>
                  <td className='px-4 py-2 text-right'>{row.score}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  );
};

export default Highscores;