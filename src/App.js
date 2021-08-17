import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubProvider from "./store/GithubProvider";
import AlertProvider from "./store/AlertProvider";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import NotFound from "./components/pages/NotFound";


const App = () => {
  return (
    <AlertProvider>
      <GithubProvider>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/">
              <Search />
              <Users />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </GithubProvider>
    </AlertProvider>
  );
};

export default App;
