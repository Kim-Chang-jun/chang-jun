import './App.css';
import Hello from './React/Hello';
import Intro from './React/Intro';
import Project from './React/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
      </header>
      <Intro />
      <Project />
    </div>
  );
}

export default App;
