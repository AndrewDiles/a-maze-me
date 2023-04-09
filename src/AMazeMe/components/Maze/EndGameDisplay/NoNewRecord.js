import CenteredColumn from "../../reused/CenteredColumn";
import HighlightingSpan from "../../reused/HighlightingSpan";

export default ({
  recordsHandled,
  thisRecord,
  beatTarget,
	thisBeatTarget
}) => (
  <CenteredColumn>
    <p>
      your best time:{" "}
      <HighlightingSpan highlight={beatTarget}>
        {thisRecord["best time"]}
      </HighlightingSpan>
      s
    </p>
    <p>
      this time:{" "}
      <HighlightingSpan highlight={thisBeatTarget}>
        {recordsHandled.thisTime}
      </HighlightingSpan>
      s
    </p>
  </CenteredColumn>
);
