'use strict';

const _ = {
  extend: function(...objects) {
    const obj = Object.assign(...objects);
    return obj;
  },

  cloneAndExtend: function(...objects) {
    const obj = _.extend({}, ...objects);
    return obj;
  }
};

export default _;