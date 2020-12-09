export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

// export function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//     response.json()
//   );
// }
