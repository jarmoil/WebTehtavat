import './App.css';
import Home from './components/Home';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>My App</h1>
      <Greeting name="Jarmo" />
      <Greeting name={123} />
      <Home />
    </>
  );
};
export default App;
