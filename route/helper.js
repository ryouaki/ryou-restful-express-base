const express = require("express");

const router = express.Router();

router.__proto__.attch = function (controller) {
  const props = controller.getProps();
  const methods = controller.getMethods();

  const subRouter = express.Router();

  methods.forEach(method => {
    let items = method.split("$");
    let strMethod = false;
    let action = null;

    if (items.length <= 1) {
      strMethod = true;
      items = method.split(" ");
    }

    action = items[0].toLowerCase();

    if (['get', 'post', 'delete', 
      'put', 'update', 'options', 
      'patch', 'head'].indexOf(action) >= 0) {
        let path = "";
        if (!strMethod) {
          for (let i = 1; i < items.length; i++) {
            path += `/${items[i].replace('_', ':')}`
          }
        } else {
          path = items[1];
        }
        
        subRouter[action](path, function (req, res, next) { 
          controller.updateContext(req, res);
          controller.before(req, res);
          const ret = controller[method](req, res);
          controller.after(req, res);
          if (!res.headersSent) {
            res.json(ret).end();
          }
        });
    }
  });

  router.use(`/${props.name.toLowerCase()}`, subRouter);
}

module.exports = router;