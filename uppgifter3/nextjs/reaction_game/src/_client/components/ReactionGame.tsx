import React, { useEffect, useState } from 'react';

type ReactionGameProps = {
    onFinished: (name: string, score: number) => void
}

const ReactionGame = ({onFinished}: ReactionGameProps) => {

    const [name, setName] = useState("");
    const [state, setState] = useState<"start"|"wait"|"click"|"result"|"fail">("start");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    useEffect(() => {
        if(state === "wait"){
            const timeout = setTimeout(() => {
                setState("click");
            }, (Math.random() * 4000) + 1000);
            return () => clearTimeout(timeout);
        }
        else if(state === "click"){
            return setStartTime(new Date().getTime());
        }else if (state === "result"){
            const time = new Date().getTime();
            onFinished(name, time - startTime);
            return setEndTime(time);
        }
    }, [state]);

    if (state === "wait") {
        return (
            <div className='w-full h-full flex flex-col justify-center items-center space-y-2 '>
                <p className='text-xl'>Wait for the button to turn green!</p>
                <button className='bg-red-600 text-white px-8 py-4 rounded hover:bg-red-500 select-none'
                onClick={() => setState("fail")}
                >Wait</button>
            </div>
        );
    } else if (state === "click") {
        return (
            <div className='w-full h-full flex flex-col justify-center items-center space-y-2'>
                <p className='text-xl'>Click the button!!!</p>
                <button className='bg-green-600 text-white px-8 py-4 rounded hover:bg-green-500 select-none'
                onClick={() => setState("result")}
                >Click</button>
            </div>
        );
    } else if (state === "result"){
        return (
            <div className='w-full h-full flex flex-col justify-center items-center space-y-2'>
                <h3 className='text-4xl'>{name}</h3>
                <p className='text-xl'>{endTime - startTime} ms</p>
                <button className='bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-500 select-none'
                onClick={() => setState("wait")}
                >Try Again</button>
            </div>
        );
    } else if (state === "fail"){
        return (
            <div className='w-full h-full flex flex-col justify-center items-center space-y-2'>
                <p className='text-xl'>You clicked too early</p>
                <button className='bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-500 select-none'
                onClick={() => setState("wait")}
                >Try again</button>
            </div>
        );
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center space-y-2 '>
            <p className='text-xl'>Test your reaction time!</p>
            <div className='flex space-x-2'>
                <input type="text" className='border rounded px-4 py-2' placeholder='Name' 
                onChange={e => setName(e.target.value)}
                />
                <button className='bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-500 select-none'
                onClick={() => setState("wait")}
                >Start</button>
            </div>
        </div>
    );
};

export default ReactionGame;