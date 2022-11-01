import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
    <Job salary={9000} position="Senior"/>

    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
    </div>
  );
}

export default App;
