import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contacts, Projects, Devices } from '../../screens'
import { Form } from '../../nav'

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Devices" component={Devices} />
        <Route exact path="/Contacts" component={Contacts} />
        <Route exact path="/Form" component={Form} />
      </Switch>
    </Router>
  );
  
  export default Routes;