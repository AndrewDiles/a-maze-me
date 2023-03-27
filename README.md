# a-maze-me

The purpose of this little project is to make a small game for my young ones to play.

I find most games are far too difficult (especially for my 2 year old).  Yes there are cell/tablet games, but none of these "train" children to use a controller.

My intent is to make a simple maze game that uses the arrow keys and wasd for movement.

MVPs:

- World Select
- Level Select
- Tracking minimum number of moves to win
- Tracking minimum time to win
- Trcking which levels have been unlocked
- Ability to upload a txt file for custom levels
- local storage for save files and custom levels

Stretch Goals:

- Player can upload a custom gif as the player character
- Detailed explainations for how to design a level


## If you are trying this repo out for yourself:

run `npm install` to install the dependancies required to boot a React environment

then, run `npm start` to play the game

## Dev Notes:

TODO: Add debounce affect on redraw on resizes as the DOM is getting crushed