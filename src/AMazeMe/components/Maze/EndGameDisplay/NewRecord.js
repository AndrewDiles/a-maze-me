import CenteredColumn from "../../reused/CenteredColumn";
import TextWithSparkles from "../../reused/TextWithSparkles";
import HighlightingSpan from "../../reused/HighlightingSpan";

export default ({ recordsHandled, thisRecord, beatTarget }) => (
  <CenteredColumn>
    <TextWithSparkles>wow your first time beating this level!</TextWithSparkles>
    <p>today: {thisRecord["first beaten"]}</p>
    <p>
      your time:{" "}
      <HighlightingSpan highlight={beatTarget}>
        {thisRecord["best time"]}
      </HighlightingSpan>
      s
    </p>
    {recordsHandled.unlock && (
      <h3>you have unlocked world {recordsHandled.unlock}!</h3>
    )}
		{recordsHandled.end && 
		<h3>you have beaten all the world's levels, congratulations!</h3>
		}
  </CenteredColumn>
);
