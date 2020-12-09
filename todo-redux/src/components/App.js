import { Link, Route } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import Home from "./Home";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Route path="/" component={Home} exact />
      <Route path="/todos" component={Todos} />
      <Route path="/users" component={UsersContainer} />
    </div>
  );
}

export default App;
