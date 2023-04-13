import logError from "../helpers/logError";
import { MAX_WORLD_INDEX } from "../constants/general";
import world1 from "./data/world1";
import world2 from "./data/world2";
import world3 from "./data/world3";

import world_template from "./data/world_template";

const worlds = [world1, world2, world3, world_template];

// consider reducing this to +1 if world_template is removed
if (MAX_WORLD_INDEX +1 !== worlds.length) {
	logError(`Error detected, mismatch between worlds length (${worlds.length}) and MAX_WORLD_INDEX (${MAX_WORLD_INDEX + 1})`)
}

export default worlds;
