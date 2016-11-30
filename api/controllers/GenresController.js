/**
 * GenresController
 *
 * @description :: Server-side logic for managing genres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    destroy: function (req, res) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        Genres.update(id, {isEnabled: false}).exec(function (err, user) {
            if (err) {
                res.serverError(err);
            }

            return res.jsonx(user);
        });
    },
    find: function (req, res) {
        Genres.find({vip: true}).exec(function (err, users) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(users);
        });
    }
};

