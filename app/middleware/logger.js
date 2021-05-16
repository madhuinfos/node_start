function log(req, res, next) {
  console.log(`logging req params in middleware: ${req.params}`);
  next();
}

module.exports = log;
