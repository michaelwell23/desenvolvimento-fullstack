import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './template/Default';
import Home from './pages/Home';

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route>
            <Home exact path="/" />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
};

export default App;
