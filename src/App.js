import './App.css';
import OriginalComponent from './HOCfolder/OriginalComponent';
import HOCComponent from './HOCfolder/hocComponent';
// import ReduxCounterApp from './Components/ReduxCounterApp';
// import CounterApp from './Components/CounterApp';
// import Test from './Components/Test';
// import Form1 from './Components/Form1';
// import Form2 from './Components/Form2';


const ChangedComponent = HOCComponent(OriginalComponent);


function App() {


  return (
    <div className="App">
      {/* <Test /> */}
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <CounterApp /> */}
      {/* <ReduxCounterApp /> */}
      <OriginalComponent name={"Jonh"} />
      <ChangedComponent name={"Jane"} />
    </div>
  );
}

export default App;
