function Users({ data, loading }) {
  const usersJsx = data.map((u) => <div key={u.id}>{u.name}</div>)

  return (
    <div className="Users">
      <h2>Users</h2>
      {loading ? <div>Loading...</div> : usersJsx}
    </div>
  );
}

export default Users;
