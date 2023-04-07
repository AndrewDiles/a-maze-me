import { useContext } from "react";
import LevelContext from "../contexts/LevelContext";
import GameContext from "../contexts/GameContext";
import useInterval from "./useInterval";
import { GAME_FREQ, BOUNCE_MAGNITUDE, MOVE_MAGNITUDE } from "../constants/general";
import calcPositionInfo from "../helpers/calcPositionInfo";
import calcColisions from "../helpers/calcColisions";

const useMovementAndCollisions = ({ hasStarted, hasEnded }) => {
  const { game, updateLocations, initializeGameWin } = useContext(GameContext);
  const { x, y, players, goals, enemies } = game;
  const { level, unlockKey1, unlockKey2, unlockKey3 } =
    useContext(LevelContext);
  const { rows, cols, layout } = level;
  const updateLocation = () => {
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
      // check OOB
      ////// make keep in bounds function
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
      // collisions will be an array of strings, example: "enemy", "goal", "key1", etc
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
        //
      } else if (collisions.includes("key2")) {
        newPlayerObject.animation = "sparkles";
        unlockKey2();
        //
      } else if (collisions.includes("key3")) {
        newPlayerObject.animation = "sparkles";
        unlockKey3();
        //
      } else if (collisions.includes("damage")) {
        newPlayerObject.alive = false;
        newPlayerObject.animation = "damage";
      }
      return newPlayerObject;
    });

    if (!game.finishTime && newPlayers.some((player) => player.animation === "win")) {
      initializeGameWin({ newPlayers, newEnemies });
    } else {
      updateLocations({ newPlayers, newEnemies });
    }
  };

	const cb = hasEnded ? ()=>{} : hasStarted ? updateLocation : ()=>{}

  useInterval({ cb, delay: GAME_FREQ });
};

export default useMovementAndCollisions;
