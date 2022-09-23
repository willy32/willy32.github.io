import React, { useState } from 'react';
import styles from "./ToDoList.module.css";

const ToDoList:React.FC = () => {
    const [txtAdd, setTxtAdd] = useState("");
    const [list, setList] = useState([""]);
    const [completed, setCompleted] = useState([-1]);

    const Add = () => {
        if(list[0] == ""){
            setList([txtAdd]);
        }else{
            setList(list.concat([txtAdd]));
        }
    }
    const Complete = (index:number) => {
        console.log(index);
        if(completed[0] == -1){
            setCompleted([index]);
        }else{
            setCompleted(completed.concat([index]));
        }
    }
    const RemoveAll = () => {
        setList([""]);
        setCompleted([-1]);
    }
    const Remove = () => {
        let tmpArray:string[] = [];
        list.forEach((item, index) => {
            let add:boolean = true;
            completed.forEach((cItem) => {
                if(cItem == index) add = false;
            });
            if(add) {
                tmpArray.push(item);
            }
        });
        setList(tmpArray);
        setCompleted([-1]);
    }

  return (
    <div>
        <div>
            <input type="text" onChange={(e) => {
                setTxtAdd(e.target.value);
            }} />
            <button onClick={Add}>Add</button>
        </div>
        <div>
            {list.map((item, index) => {
                let tmpCompleted:boolean = false;
                completed.forEach(cItem => {
                    if(cItem == index) tmpCompleted = true;
                });
                return <p key={index} onClick={() => Complete(index)} className={
                    tmpCompleted ? styles.completed : styles.none
                }>{item}</p>;
            })}
        </div>
        <div>
            <button onClick={RemoveAll}>Remove All</button>
            <button onClick={Remove}>Remove Completed</button>
        </div>
    </div>
  );
};

export default ToDoList;