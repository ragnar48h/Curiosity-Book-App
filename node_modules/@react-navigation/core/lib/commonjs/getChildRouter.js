"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getChildRouter;

function getChildRouter(router, routeName) {
  if (router.childRouters && router.childRouters[routeName]) {
    return router.childRouters[routeName];
  }

  const Component = router.getComponentForRouteName(routeName);
  return Component.router;
}
//# sourceMappingURL=getChildRouter.js.map