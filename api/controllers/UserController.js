/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //destroy: function (req, res) {
    //    var id = req.param('id');
    //
    //    if (!id) {
    //        return res.badRequest('No id passed.');
    //    }
    //
    //    User.update(id, {isEnabled: false}).exec(function (err, user) {
    //        if (err) {
    //            res.serverError(err);
    //        }
    //
    //        return res.jsonx(user);
    //    });
    //},
    vipOnly: function (req, res) {
        User.find({vip: true}).exec(function (err, users) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(users);
        });
    },

    delete: function (req, res) {
        User.Remove({ id: req.params.user_id }, function(err) {
            if (!err) {
                return res.send('User deleted!');
            } else {
                return res.send('Error deleting user!');
            }
        });
    }
};

