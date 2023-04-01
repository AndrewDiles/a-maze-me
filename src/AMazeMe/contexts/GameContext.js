import { createContext, useState } from "react";

const GameContext = createContext(null);
export default GameContext;

const defaultState = {
	viewing: "menu",
	subView: null
}

export const GameProvider = ({ children }) => {
	const [game, setGame] = useState({...defaultState});
	console.log(game);
	const openSlotSelect = () => {
		setGame({...game, viewing: "worlds", subView: "select-slot"})
	}
	const openLevelSelect = () => {
		setGame({...game, viewing: "worlds", subView: null})
	}
	const openEditor = () => {
		setGame({...game, viewing: "editor", subView: null})
	}
	const openRecords = () => {
		setGame({...game, viewing: "records", subView: null})
	}
	const returnToMenu = () => {
		setGame({...game, viewing: "menu", subView: null})
	}
	const openImporter = () => {
		setGame({...game, viewing: "editor", subView: "import"})
	}
  return (
    <GameContext.Provider value={{game, openSlotSelect, openLevelSelect, openEditor, openRecords, returnToMenu, openImporter }}>{children}</GameContext.Provider>
  );
};
