import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Home exact path="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
