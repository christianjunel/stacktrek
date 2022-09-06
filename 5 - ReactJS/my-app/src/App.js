// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ListOfFruits from './components/ListOfFruits';
import FormSample from './components/FormSample';
import ClassNameSample from './components/ClassNameSample';
import AAB from './components/AAB';
import Greeter from './components/Greeter';
import CustomButton from './components/CustomButton';
import Destruct from './components/Destruct';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ListOfFruits />
      <FormSample />
      <ClassNameSample />
      <AAB />
      <Greeter name="Keith" />
      <Greeter name="Arianne" />
      <CustomButton onClick={() => console.log('Clicked!')} />
      <Destruct active="This is header 1" activeStatus="This is header 2" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
