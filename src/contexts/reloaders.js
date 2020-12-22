import React,{useState, createContext} from 'react';

export const reloadListContext = createContext();
export const reloadListProvider = (props) =>{
    const [value, setValue] = useState(true);
    return(
        <reloadListContext.Provider value={[value, setValue]}>
            {props.children}
        </reloadListContext.Provider>
    );
}