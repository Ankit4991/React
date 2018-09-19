import React, { Component } from 'react'; 
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'gjbc', name: 'Ankit', age: 22},
      {id: 'vafw', name: 'Singh', age: 23},
      {id: 'aerg', name: 'Rawat', age: 24}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.person[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


   this.setState({persons: persons});
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
            {this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
        </div>
      );
      style.backgroundColor= 'red';
      
    }
    let classes = [];
    if (this.state.persons.length <=2){
      classes.push('red')// classes = ['red']
    }
    if (this.state.persons.length <=1){
      classes.push('bold')//classes = ['red','bold']
    }
    return (
      
      <div className="App">
          <h1>Hi, Welcome to the new React Application</h1>
          <p className={classes.join(' ')}>This is Really Working</p>
          <button 
            style={style}
            onClick={() => this.togglePersonsHandler('Ajay!!')}>Toggle 
          </button>
          {persons}
      </div>
     
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am working on React.js'))
  }
}

export default App;
