import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './template/Default';
import TemplatePage from './template/Page.js';

import Customers from './pages/Customers.js';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route>
            <TemplatePage title="Página Inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
