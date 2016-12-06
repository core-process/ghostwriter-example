// import style
import './main.css';

// setup ghostwriter
import * as ghostwriter from 'ghostwriter-apptool';
ghostwriter.setup('page');

// setup and render app
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app.js';
import Page0 from './page0.js';
import Page1 from './page1.js';
import Page2 from './page2.js';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <IndexRoute component={Page0}/>
    </Route>
  </Router>,
	document.getElementById('app')
);
