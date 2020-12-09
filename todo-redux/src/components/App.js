import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todos";
import Users from "./Users";

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
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
