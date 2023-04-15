import { useState } from "react";
import CenteredColumn from "../reused/CenteredColumn";
import Header from "../reused/Header";
import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import SlotSelection from "./SlotSelection";
import SolvedCount from "./SolvedCount";
import ViewWorlds from "./ViewWorlds";
import SeeOtherSlotsButton from "./SeeOtherSlotsButton";
import DeleteButton from "./DeleteButton";

export default () => {
  const [slot, setSlot] = useState(null);
  return (
    <CenteredColumn>
      <Header>{typeof slot === "number" && `slot ${slot+1} `}records</Header>
      {typeof slot !== "number" ? (
        <SlotSelection setSlot={setSlot} />
      ) : (
				<>
					<SolvedCount slot={slot}/>
					<ViewWorlds slot={slot}/>
					<SeeOtherSlotsButton setSlot={setSlot}/>
					<DeleteButton slot={slot} setSlot={setSlot}/>
				</>
			)}
			<ReturnToMenu lowerCased={true} />
    </CenteredColumn>
  );
};
