# a-maze-me

The purpose of this little project is to make a small game for my young ones to play.

I find most games are far too difficult (especially for my 2 year old).  Yes there are cell/tablet games, but none of these "train" children to use a controller.

My intent is to make a simple maze game that uses the arrow keys and wasd for movement.

## MVPs:

- ✅ World Select
- ✅ Level Select
- Play an uploaded level (do this at during slot selection)
- ~~Tracking minimum number of moves to win~~ (invalid as movement is not cell based)
- ✅ Tracking target times to win
- ✅ Trcking which levels have been unlocked
- ✅ Ability to upload a json file for custom levels
- ✅local storage for save files and custom levels
- Make WASD controls for all menus (most are done)

## Stretch Goals:

Planning on doing:
- Restart button during game
- Sound effects
- Viewing all records and target times for a slot
- Reset a save slot
- a face on the player
- in editor level user select world / level

Not planning on doing:
- Player can upload a custom gif as the player character
- Detailed explainations for how to design a level
- Explaination of how to play
- Modular controls
- Enemies



## If you are trying this repo out for yourself:

run `npm install` to install the dependancies required to boot a React environment

then, run `npm start` to play the game

## Dev Notes:

- Added debounce affect on redraw on resizes as the DOM is getting crushed

- Decided to make levers that rotate a block.  Had to make those blocks a sprite to animate rotation, and setting the new switch state could not be accomplished by a dispatch inside the state management function as the new value would be overridden by the stale state held by the original caller.

- Added a world selection carousel.

- Around 30hours in now.  All MVP game mechanics are operational.  Just going to have some fun building levels.