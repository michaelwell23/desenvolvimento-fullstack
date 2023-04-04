import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './template/Default';
import TemplatePage from './template/Page.js';

import Home from './pages/Home';
import Edit from './pages/customers/Edit';
import Register from './pages/customers/Register';
import List from './pages/customers/List';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/edit/:id">
            <TemplatePage title="Editar Clientes" Component={Edit} />
          </Route>
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
