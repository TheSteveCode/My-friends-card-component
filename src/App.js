import "./styles.css";

import Friends from "./components/Friends";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>My friends</h1>

        <h2>Know some of my friends!</h2>
        <ul>
          <Friends />
        </ul>
      </div>
    </div>
  );
};

export default App;
