// not a pure function
import { BOUNCE_MAGNITUDE } from "../constants/general";
export default ({TLPos, BRPos, rows, cols, bounced, newPlayerObject}) => {
	if (TLPos.row < 0) {
		bounced.y = true;
		newPlayerObject.y += BOUNCE_MAGNITUDE;
	} else if (BRPos.row >= rows) {
		bounced.y = true;
		newPlayerObject.y -= BOUNCE_MAGNITUDE;
	}
	if (TLPos.col < 0) {
		bounced.x = true;
		newPlayerObject.x += BOUNCE_MAGNITUDE;
	} else if (BRPos.col >= cols) {
		bounced.x = true;
		newPlayerObject.x -= BOUNCE_MAGNITUDE;
	}
}