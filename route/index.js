const router = require('./helper');
const path = require('path');
const fs = require('fs');

const controllerPath = path.resolve(__dirname, '..', 'controller');

const files = fs.readdirSync(controllerPath);

files.forEach((file) => {
  const stat = fs.lstatSync(`${controllerPath}/${file}`);
  if (stat.isFile()) {
    const Controller = require(`${controllerPath}/${file}`);
    router.attch(new Controller());
  }
});

module.exports = router;