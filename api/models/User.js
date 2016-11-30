/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'text',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    age: {
      type: 'integer',
      min: 18,
      max: 100
    },
    vip: {
      type: 'boolean',
      defaultsTo: false,
      required: true
    },
    isEnabled: {
      type: 'boolean',
      required: true,
      defaultsTo: true
    }
  },

  create: function (req, res) {
    if (!req.body) {
      return res.badRequest('No body data passed.');
    }

    User.create(req.body).exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      }

      return res.jsonx(user);
    });
  },

  update: function (req, res) {
    if (!req.body) {
      return res.badRequest('No body data passed.');
    }

    var id = req.param('id');

    if (!id) {
      return res.badRequest('No id passed.');
    }

    User.update(id, req.body).exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      }

      return res.jsonx(user);
    });
  }

};

