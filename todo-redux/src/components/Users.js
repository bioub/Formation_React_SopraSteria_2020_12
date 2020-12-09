import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // equivalent de componentDidMount
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setLoading(false);
        setUsers(users);
      });
  }, []);

  const usersJsx = users.map((u) => <div key={u.id}>{u.name}</div>)

  return (
    <div className="Users">
      <h2>Users</h2>
      {loading ? <div>Loading...</div> : usersJsx}
    </div>
  );
}

export default Users;
