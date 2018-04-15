'use strict';

const downline = {
  extend: function(...objects) {
    const obj = Object.assign(...objects);
    return obj;
  },

  cloneAndExtend: function(...objects) {
    const obj = downline.extend({}, ...objects);
    return obj;
  }
};

export default downline;