const logger = (req, res, next) => {
    req.msg = 'hello world';
    console.log(req.method, ' ', req.url);
    next()
}

module.exports = logger;