import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import Users from "./Components/Users";
import Profiles from "./Components/Profiles";
import Home from "./Components/Home";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/profiles">Profiles</Link>
      </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/create-user" component={CreateUser}></Route>
          <Route exact path="/edit-user/:id" component={EditUser}></Route>
          
          
          
          <Route exact path="/profiles" component={Profiles}></Route>
          <Route exact path="/create-profile" component={Create}></Route>
          <Route exact path="/edit/:id" component={Edit}></Route>
          <Route exact path="*" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
