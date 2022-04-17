import "./styles.css";
import {Component} from 'react';

 class App extends Component{
   constructor(){
     super();
     this.state={
       monsters:[]
     };
   }
   //use lifecycle method in Component to get user list
   componentDidMount(){
     //fetch the api-->giving URL to get the JSON
     fetch('https://jsonplaceholder.typicode.com/users')
     //when we fetch it this going to be a promise
     .then(response =>response.json())
     .then(users =>this.setState(() => {
       return {monsters: users};
     }))
   }

   render(){
    return (
      //if we want to input a class then we need a classname
      <div className="App">
        {/*onchange handler-->pass it a callback */}
        <input className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={
          (event) => {
            const searchString=event.target.value.toLocaleLowerCase();
            /*.filter() is like .map() but it gives a new array */
            const filteredMonsters= this.state.monsters.filter((monster) => {
              /*String has a includes method */
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() =>{
              return {monsters: filteredMonsters};
            })
          }
        }/>

        {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
            })}
      </div>
    );
   }
  
}


export default App;
