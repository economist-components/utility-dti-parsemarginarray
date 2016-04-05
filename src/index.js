// TODO: Make another utility of this.
// https://github.com/jquery/jquery/blob/c869a1ef8a031342e817a2c063179a787ff57239/src/core.js#L214
function isNumeric(n) {
  return !Array.isArray( n ) && (n - parseFloat( n ) + 1) >= 0;
}

/**
 * Reads in an array that's like a CSS margin declaration: it should
 *   be given in [top right bottom left] order, but will handle
 *   omitted values as CSS does
 *
 * @param  {Array|Number}  marginArray - margin values as array, or
 *                                     simply as a single number
 *
 * @return {Object} margin values as an object
 */

export default function Utilitydtiparsemarginarray(marginArray) {
  if(isNumeric(marginArray)) {
    marginArray = [+marginArray];
  }
  if(!(marginArray instanceof Array)) {
    return marginArray;
  }
  var top, right, bottom, left;
  switch (marginArray.length) {
    case 1:
      top = right = bottom = left = marginArray[0];
      break;
    case 2:
      top = bottom = marginArray[0];
      right = left = marginArray[1];
      break;
    case 3:
      top = marginArray[0];
      bottom = marginArray[2];
      right = left = marginArray[1];
      break;
    default:
      top = marginArray[0];
      right = marginArray[1];
      bottom = marginArray[2];
      left = marginArray[3];
      break;
  }
  return { top : top, right : right, bottom: bottom, left : left };

}
