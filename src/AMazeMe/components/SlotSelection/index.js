import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import Slots from "./Slots";
import Header from "../reused/Header";
import CenteredColumn from "../reused/CenteredColumn";

export default () => {
  return (
    <CenteredColumn>
      <Header>select slot</Header>
			<Slots/>
			<ReturnToMenu lowerCased={true}/>
    </CenteredColumn>
  );
};