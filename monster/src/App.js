import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component'; 
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state ={ 
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}))
  }
   
 
  render(){
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter
    (monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
   
    return (
      <div className="App">
      <h1 classN='h11'> Monster Rolodex </h1>
      <SearchBox 
        placeholder='search monsters' 
        handleChange={
         e => this.setState({searchField: e.target.value})}
         />
      <CardList monsters={filteredMonster} />
      </div>
    );
  };
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//           <h1>Welcome to React JS</h1>
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
