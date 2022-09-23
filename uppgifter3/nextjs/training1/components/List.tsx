import React, { ReactNode } from 'react';

type Props = {
    children?:any,
    items:string[],
    query?:string
};

const List:React.FC<Props> = ({
    children,
    items,
    query= ""
}:Props) => {

  return (
    <ul>
        {items.map((item, index) => (
            item.toLowerCase().includes(query!.toLowerCase()) ? <li key={item}>{item}</li> : <></>
        ))}
    </ul>
  );
};

export default List;