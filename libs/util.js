import React, { Dimensions, Platform } from 'react-native';

const windowInfo = Dimensions.get('window');

// If we are in landscape switch width and height
if (windowInfo.width > windowInfo.height) {
  let width = windowInfo.height;
  let height = windowInfo.width;
  windowInfo.width = width;
  windowInfo.height = height;
} 

console.log ("utils")

//TODO: this is the hack, it needs to be replaced with a proper way to return a
//proper height value for android
//this magic number represents the height of tool bar provided by android os.
const androidMagicNumber = 24;
const window = {
  width: windowInfo.width ,
  height: Platform.OS === 'ios'? windowInfo.height : windowInfo.height - androidMagicNumber
};

const glypyMapMaker = (glypy) => Object.keys(glypy).map((key) => {
  return {
    key,
    value: String.fromCharCode(parseInt(glypy[key], 16))
  };
}).reduce((map, glypy) => {
  map[glypy.key] = glypy.value
  return map;
}, {});

export {
  window,
  glypyMapMaker
};
