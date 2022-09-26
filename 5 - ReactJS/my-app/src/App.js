// import logo from './logo.svg';
import './App.css';
// import ComplexForm from './components/ComplexForm';
// import ControlledComponent from './components/ControlledComponent';
// import OnSubmitForm from './components/OnSubmitForm';
import HelloWorld from './components/HelloWorld';
// import ListOfFruits from './components/ListOfFruits';
// import FormSample from './components/FormSample';
// import ClassNameSample from './components/ClassNameSample';
// import AAB from './components/AAB';
// import Greeter from './components/Greeter';
// import CustomButton from './components/CustomButton';
// import Destruct from './components/Destruct';
// import ButtonSample from './components/ButtonSample';
// import Card from './components/Card';
// import ButtonClick from './components/ButtonClick';
// import FancyPrint from './components/FancyPrint';
// import LayeredEventHandling from './components/LayeredEventHandling';
// import ArraySample from './components/ArraySample';
// import HooksOne from './components/HooksOne';
// import ObjectHooks from './components/ObjectHooks';
// import ArrayHooks from './components/ArrayHooks';
// import Counter from './components/UseEffectSample';
import PostViewer from './components/PostViewer';
// import ValueChangeRun from './components/ValueChangeRun';
// import APIViewer from './components/APIViewer';
// import RunEveryRender from './components/RunEveryRender';
// import CleanUp from './components/CleanUp';
import WorkingCounter from './components/WorkingCounter';
// import CustomForm from './components/CustomForm';
// import UpdatingHooks from './components/UpdatingHooks';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Error404 from './components/404';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/posts/:username" element={<PostViewer />} />
          <Route path="/counter" element={<WorkingCounter />} />
          <Route path="*" element={<Error404 />} /> 
        </Routes>
        <footer>
          <div>This is the footer.</div>
        </footer>
      </Router>
      {/* <HelloWorld /> */}
      {/* <HelloWorld />
      <ListOfFruits />
      <FormSample />
      <ClassNameSample />
      <AAB />
      <Greeter name="Keith" />
      <Greeter name="Arianne" />
      <CustomButton onClick={() => console.log('Clicked!')} />
      <Destruct active="This is header 1" activeStatus="This is header 2" />
      <Card>
        <ButtonSample>Test</ButtonSample>
        <ButtonSample>Hello</ButtonSample>
      </Card>
      <ButtonClick>Click me!</ButtonClick>
      <FancyPrint someString="Ceej" />
      <LayeredEventHandling />
      <ArraySample /> */}
      {/* <HooksOne />
      <ObjectHooks />
      <ArrayHooks />
      <Counter /> */}
      {/* <PostViewer /> */}
      {/* <ValueChangeRun /> 
      <APIViewer />
      <RunEveryRender />
      <CleanUp />
      <WorkingCounter />
      <CustomForm /> */}
      {/* <UpdatingHooks /> */}
      {/* <OnSubmitForm />
      <ComplexForm /> */}
      {/* <ControlledComponent /> */}
    </div>
  );
}

export default App;
