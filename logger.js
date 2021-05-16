function log(req, res, next) {
  console.log(`logging req params in middleware: ${req.params}`);
  console.log(`logging req body in middleware: ${req.body}`);
  next();
}

module.exports = log;
