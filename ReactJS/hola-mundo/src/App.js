import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
//import GreetingStyled from './components/pure/greetingStyled';
//import GreetFun from  "./components/pure/greetFun.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio de jsx */}
       {/*<Greeting name="Elber"></Greeting>*/}
       {/*<GreetFun name="Elber"></GreetFun>*/}
       <TaskListComponent></TaskListComponent>
       {/*<GreetingStyled name="José"></GreetingStyled>*/}
      </header>
    </div>
  );
}

export default App;
