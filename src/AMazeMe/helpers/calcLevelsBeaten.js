export default (recordInfo) => {
  let levelsBeaten = 0;
  recordInfo.forEach((worldArray) => (levelsBeaten += worldArray.length));
  return levelsBeaten;
};
