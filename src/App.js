//import logo from './logo.svg';
//import './App.css';
import Header from './components/header'
import React from 'react'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Color grading : DaVinci Resolve',
        day:'March 15th at 7.30pm',
        reminder: true
    },
    {
        id:2,
        text:'Japanese N1 : Dokkai',
        day:'March 15th at 8.30pm',
        reminder: false
    },
    {
        id:3,
        text:'Video thumbnail Design',
        day:'March 15th at 9.30pm',
        reminder: true
    }
  ])

  return (
    <div className = 'container'>
        <Header/>
        <Tasks/>
    </div>
  )
  
}
// class App extends React.Component{
//   render(){
//     return  <h1>Hello from a class</h1> 
//   }
// }
// function App() {
//   const name = 'Louis'
//   return (
//     <div className="container">
//       <Header />
//     </div>
    
//   );
// }

export default App;
/*<header className="App-header">
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
</header> */
