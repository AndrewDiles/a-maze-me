import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import Header from "../reused/Header";
import CenteredColumn from "../reused/CenteredColumn";

export default () => {
  return (
    <CenteredColumn>
      <Header>records</Header>
			display 3 slots.  If you click on one, display collapsable worlds with their progress
      <ReturnToMenu lowerCased={true}/>
    </CenteredColumn>
  );
};
