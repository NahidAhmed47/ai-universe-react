import './App.css'
import Button from './components/Button/Button';
import SingleDataShow from './components/Card/SingleDataShow';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Button text="Short by Date"></Button>
      <SingleDataShow></SingleDataShow>
    </div>
  )
};

export default App;
