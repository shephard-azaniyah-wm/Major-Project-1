/**
 * Albums.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'text',
      required: true
    },

      totalTime: {
          type: 'integer'
      },

      year: {
          type: 'integer',
          min: 1800,
          max: 2100
      },

      artist: {
          type: 'text',
          required: true
      }
  }
};

