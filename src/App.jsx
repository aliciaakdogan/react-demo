import UserCard from "./UserCard";

function App() {
  const users = [
    {
      name: "Matheus",
      image: "https://avatars.githubusercontent.com/u/1?v=4",
    },
    {
      name: "Adam",
      image: "https://avatars.githubusercontent.com/u/2?v=4",
    },
    {
      name: "Carl",
      image: "https://avatars.githubusercontent.com/u/3?v=4",
    },
  ];

  return (
    <div className="App">
      {users.map((user) => (
        <UserCard name={user.name} image={user.image} key={user.name} />
      ))}
    </div>
  );
}

export default App;
