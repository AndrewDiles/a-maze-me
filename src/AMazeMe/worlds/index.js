import logError from "../helpers/logError";
import { MAX_WORLD_INDEX } from "../constants/general";
import world1 from "./data/world1";
import world2 from "./data/world2";

const worlds = [world1, world2];

if (MAX_WORLD_INDEX +1 !== worlds.length) {
	logError(`Error detected, mismatch between worlds length (${worlds.length}) and MAX_WORLD_INDEX (${MAX_WORLD_INDEX + 1})`)
}

export default worlds;
