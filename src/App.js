import axios from "axios";


async function getData() {
  const resp = await axios.get("/api/users");
  console.log(resp.data);
  return resp.data;
}

getData();

function App() {
  return (
    <div className="App">
      <h1>sotoaso</h1>
    </div>
  );
}

export default App;
