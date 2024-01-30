const has = Object.prototype.hasOwnProperty;

/**
 * To Check if the props has null, undefined and empty
 */
const isEmpty = (prop) =>
  prop === null ||
  prop === undefined ||
  prop === 'undefined' ||
  prop === false ||
  (has.call(prop, 'length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

export default isEmpty;
