import { createContext, useState } from "react";

// setup out blank store
const MyStore = React.createContext();


// make a provider of our store who handle data
// and serves to the customers
export const ContextProvider = ({children}) =>{

    const [centralValue, setCentralValue] = useState()
     return <MyStore.Provider>

        {children}

     </MyStore.Provider>

};