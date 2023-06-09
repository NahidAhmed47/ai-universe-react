import './App.css'
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import SingleDataShow from './components/Card/SingleDataShow';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Button text="Short by Date"></Button>
      <Card></Card>
    </>
  )
};

export default App;
