import { useState, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"

const RecordsContext = createContext(null);
export default RecordsContext;

// once beaten, a record object will be added to the array: {time, date}
export const RecordsProvider = ({ children }) => {
	const [records1, setRecords1] = useLocalStorage("maze-records-slot1", [[]]);
	const [records2, setRecords2] = useLocalStorage("maze-records-slot1", [[]]);
	const [records3, setRecords3] = useLocalStorage("maze-records-slot1", [[]]);
	const [selectedSlot, setSelectedSlot] = useState(0);
	const records = [records1, records2, records3];
	const setters = [setRecords1, setRecords2, setRecords3];

  return (
    <RecordsContext.Provider value={{records1, records2, records3, selectedSlot, setSelectedSlot, selectedRecords:records[selectedSlot], setSelectedRecords: setters[selectedSlot]} }>{children}</RecordsContext.Provider>
  );
};
