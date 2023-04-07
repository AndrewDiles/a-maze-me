import { BOUNCE_MAGNITUDE } from "../constants/general";

export const bounceRightIfApplicable = ({ bounced, newPlayerObject, x }) => {
  if (!bounced.x && x < 0) {
    bounced.x = true;
    newPlayerObject.x += BOUNCE_MAGNITUDE;
  }
};

export const bounceLeftIfApplicable = ({ bounced, newPlayerObject, x }) => {
  if (!bounced.x && x > 0) {
    bounced.x = true;
    newPlayerObject.x -= BOUNCE_MAGNITUDE;
  }
};

export const bounceUpIfApplicable = ({ bounced, newPlayerObject, y }) => {
  if (!bounced.y && y > 0) {
    bounced.y = true;
    newPlayerObject.y -= BOUNCE_MAGNITUDE;
  }
};

export const bounceDownIfApplicable = ({ bounced, newPlayerObject, y }) => {
  if (!bounced.y && y < 0) {
    bounced.y = true;
    newPlayerObject.y += BOUNCE_MAGNITUDE;
  }
};
