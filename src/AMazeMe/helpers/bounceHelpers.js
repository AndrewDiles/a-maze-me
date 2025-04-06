import { BOUNCE_MAGNITUDE, TELEPORTATION_TARGET_TABLE } from "../constants/general";

const TELEPORTATION_LETTERS = Object.values(TELEPORTATION_TARGET_TABLE);

export const bounceRightIfApplicable = ({ bounced, newPlayerObject, x, contactLetter }) => {
  if (!bounced.x && x < 0 && !TELEPORTATION_LETTERS.includes(contactLetter)) {
    bounced.x = true;
    newPlayerObject.x += BOUNCE_MAGNITUDE;
  }
};

export const bounceLeftIfApplicable = ({ bounced, newPlayerObject, x, contactLetter }) => {
	console.log(contactLetter, TELEPORTATION_LETTERS)
  if (!bounced.x && x > 0 && !TELEPORTATION_LETTERS.includes(contactLetter)) {
    bounced.x = true;
    newPlayerObject.x -= BOUNCE_MAGNITUDE;
  }
};

export const bounceUpIfApplicable = ({ bounced, newPlayerObject, y, contactLetter }) => {
  if (!bounced.y && y > 0 && !TELEPORTATION_LETTERS.includes(contactLetter)) {
    bounced.y = true;
    newPlayerObject.y -= BOUNCE_MAGNITUDE;
  }
};

export const bounceDownIfApplicable = ({ bounced, newPlayerObject, y, contactLetter }) => {
  if (!bounced.y && y < 0 && !TELEPORTATION_LETTERS.includes(contactLetter)) {
    bounced.y = true;
    newPlayerObject.y += BOUNCE_MAGNITUDE;
  }
};
