import React from 'react';
import useNoteDeleteMutation from '../../mutations/useNoteDeleteMutation';
import useNoteEditMutation from '../../mutations/useNoteEditMutation';
import useNoteQuery from '../../queries/useNoteQuery';

type DataRowProps = {
    id: number,
    title: string,
    content: string,
    createdAt: string
  }

const Notes = () => {
    const {data, isLoading} = useNoteQuery();
    const {mutate} = useNoteDeleteMutation();
    const mutateEdit = useNoteEditMutation().mutate;

    if(isLoading){
        return(
            <div>Loading...</div>
        );
    }

    const deleteNote = (id: number) => {
        mutate({id});
    }
    const editNote = (id: number) => {
        mutateEdit({id, title, content});
    }

    const parseDate = (createdAt: string): string => {
        const date = new Date(createdAt);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
    
    return (
        <div className="flex flex-wrap">
            {
                data.map((row: DataRowProps) => (
                    <div className="flex flex-col justify-between w-fit max-w-xs shadow-md shadow-gray-500 p-4 m-4 rounded space-y-2" key={row.id}>
                        <div className="space-y-1 flex flex-col">
                            <h3 className="text-2xl">{row.title}</h3>
                            <p className="max-w-xs overflow-hidden text-ellipsis">{row.content}</p>
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <p className="text-gray-500">{parseDate(row.createdAt)}</p>
                            <button className="text-white bg-red-500 hover:bg-red-400 px-4 py-2" onClick={() => deleteNote(row.id)}>Delete</button>
                            <button className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2" onClick={() => editNote(row.id)}>Edit</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Notes;