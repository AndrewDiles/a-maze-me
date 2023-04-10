import { useContext } from "react";
import LevelContext from "../contexts/LevelContext";
import GameContext from "../contexts/GameContext";
import useInterval from "./useInterval";
import { GAME_FREQ, MOVE_MAGNITUDE } from "../constants/general";
import calcPositionInfo from "../helpers/calcPositionInfo";
import keepInBounds from "../helpers/keepInBounds";
import calcColisions from "../helpers/calcColisions";

const useMovementAndCollisions = ({ hasStarted, hasEnded }) => {
  const { game, updateLocations, initializeGameWin } = useContext(GameContext);
  const { x, y, players, enemies } = game;
  const { level, unlockKey1, unlockKey2, unlockKey3, flipSwitch } =
    useContext(LevelContext);
  const { rows, cols, layout } = level;
  const updateLocation = () => {
		let newSwitchValue = game.switch;
    // TODO: manage enemy movement / ai if it gets included
    const newEnemies = [];

    const newPlayers = players.map((playerObject) => {
      const newPlayerObject = { ...playerObject };
      if (typeof x === "number") {
        newPlayerObject.x += MOVE_MAGNITUDE * x;
      }
      if (typeof y === "number") {
        newPlayerObject.y += MOVE_MAGNITUDE * y;
      }
      const { TLPos, TRPos, BRPos, BLPos } = calcPositionInfo({
        x: newPlayerObject.x,
        y: newPlayerObject.y,
      });
      const bounced = { y: false, x: false };

      // bounces player inbounds if OOB (modifies bounced and newPlayerObject)
			keepInBounds({TLPos, BRPos, rows, cols, bounced, newPlayerObject})
      
			// manages collisions with walls, goals, keys and *enemies
			// (modifies bounced and newPlayerObject)
      const collisions = calcColisions({
        bounced,
        newPlayerObject,
        newEnemies,
        layout,
        TRPos,
        TLPos,
        BLPos,
        BRPos,
        x,
        y,
      });

      if (collisions.includes("goal")) {
        newPlayerObject.animation = "win";
      } else if (collisions.includes("key1")) {
        newPlayerObject.animation = "sparkles";
        unlockKey1();
      } else if (collisions.includes("key2")) {
        newPlayerObject.animation = "sparkles";
        unlockKey2();
      } else if (collisions.includes("key3")) {
        newPlayerObject.animation = "sparkles";
        unlockKey3();
      } else if (collisions.includes("damage")) {
        newPlayerObject.alive = false;
        newPlayerObject.animation = "damage";
      } else if (collisions.includes("turn switch on")) {
				if (!game.switch) {
					flipSwitch(true);
					newSwitchValue = true; //////
				}
			} else if (collisions.includes("turn switch off")) {
				if (game.switch) {
					flipSwitch(false);
					newSwitchValue = false; /////
				}
			}
      return newPlayerObject;
    });

    if (!game.finishTime && newPlayers.some((player) => player.animation === "win")) {
      initializeGameWin({ newPlayers, newEnemies });
    } else {
      updateLocations({ newPlayers, newEnemies, newSwitchValue });
    }
  };

	const cb = hasEnded ? ()=>{} : hasStarted ? updateLocation : ()=>{}
  useInterval({ cb, delay: GAME_FREQ });
};

export default useMovementAndCollisions;
