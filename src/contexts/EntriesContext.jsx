import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// Create the context
//       someContextVariable = createContext(defaultValue);
 const JournalEntiresContext = createContext([])


// Create custom hooks to access the context data
export function useJournalEntriesData() {
    console.log("Passing data around!");
    let currentJournalData = useContext(JournalEntiresContext);
    if (currentJournalData.length == 0) {
        console.log("No entries to show!");
    }

    return useContext(JournalEntiresContext);
}


// Create the context provider
export default function JournalEntiresProvider(props) {
    let [journalEntries, setJournalEntries] = useState([]);

    return(
        <JournalEntiresContext.Provider value={journalEntries}>
            {props.children}
        </JournalEntiresContext.Provider>
    )
}