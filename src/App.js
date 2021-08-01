import './App.scss';
import Header from './components/shared/Header';
import Login from './components/login/Login';
import Register from './components/register/register';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <div className="App container">
        <Header />

        <section>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />         
          </Switch>
        </section>

      </div>
    </Router>

  );
}

export default App;
