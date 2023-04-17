import { RecordsProvider } from "./contexts/RecordsContext";
import { LevelProvider } from "./contexts/LevelContext";
import { GameProvider } from "./contexts/GameContext";
import GlobalStyles from "./components/GlobalStyles";
import ComponentGenerator from "./components/ComponentGenerator";

export default () => {
  return (
    <GameProvider>
      <LevelProvider>
        <RecordsProvider>
          <GlobalStyles />
          <ComponentGenerator />
        </RecordsProvider>
      </LevelProvider>
    </GameProvider>
  );
};
