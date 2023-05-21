import CenteredColumn from "../../reused/CenteredColumn";
import HighlightingSpan from "../../reused/HighlightingSpan";

export default ({
  thisTime, targetTime
}) => (
  <CenteredColumn>
    <p>
      your time is:{" "}
      <HighlightingSpan highlight={thisTime <= targetTime}>
        {thisTime}
      </HighlightingSpan>
      s
    </p>
    <p>
      the target time is:{" "}
      <HighlightingSpan highlight={false}>
        {targetTime}
      </HighlightingSpan>
      s
    </p>
  </CenteredColumn>
);
