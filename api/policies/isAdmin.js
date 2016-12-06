module.exports = function (req, res, next) {
    if (req.headers.authorization === 'my secret key') {
        next();
    } else {
        return res.forbidden('No valid Authorize header passed.');
    }
};

// user-auth
/**
 * Created by session1 on 11/18/16.
 */
