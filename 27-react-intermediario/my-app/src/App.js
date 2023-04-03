import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './template/Default';
import TemplatePage from './template/Page.js';

import List from './pages/customers/List';
import Register from './pages/customers/Register';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage title="Cadastrar Clientes" Component={Register} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Lista de Clientes" Component={List} />
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
