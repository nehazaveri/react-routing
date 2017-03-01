const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
//const useRouterHistory = ReactRouter.useRouterHistory;
//const createHashHistory = require('history/lib/createHashHistory');
const hashHistory = ReactRouter.hashHistory;
//Remove # from browser
// var History = useRouterHistory(createHashHistory)({
//   queryKey: false
// });

const Base = require('./components/Base.jsx');
const Page1 = require('./components/Page1.jsx');
const Page2 = require('./components/Page2.jsx');


var Routes=(
<Router history={hashHistory}>
    <Route path="/" component={Base}>
      <Route path="/page1" component={Page1} ></Route>
      <Route path="/page2" component={Page2} ></Route>
    </Route>
  </Router>
  );


module.exports = Routes;
