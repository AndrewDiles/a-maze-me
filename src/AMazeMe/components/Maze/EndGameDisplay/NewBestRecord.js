import CenteredColumn from "../../reused/CenteredColumn";
import TextWithSparkles from "../../reused/TextWithSparkles";
import HighlightingSpan from "../../reused/HighlightingSpan";

export default ({
  recordsHandled,
  thisRecord,
  beatTarget,
  previousBeatTarget,
}) => (
  <CenteredColumn>
    <TextWithSparkles>a new record!</TextWithSparkles>
    <p>
      your previous best:{" "}
      <HighlightingSpan highlight={previousBeatTarget}>
        {recordsHandled.lastrecord}
      </HighlightingSpan>
      s
    </p>
    <p>
      your new best:{" "}
      <HighlightingSpan highlight={beatTarget}>
        {thisRecord["best time"]}
      </HighlightingSpan>
      s
    </p>
  </CenteredColumn>
);
