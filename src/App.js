import React,{Component} from 'react';
import './App.css';
import Person from  './Person/Person';


class App extends Component {
  state = {
    persons:[
      {id:"ab",name:"qwe", age:23},
      {id:"cd",name:"asd",age:24},
      {id:"ef",name:"zxc",age:29}
    ],
    showPersons: false
  };

  
  nameChangeHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }


    person.name = event.target.value;

   // console.log(person);

    const persons = [...this.state.persons];

    persons[personIndex] = person;





    this.setState({
      persons:persons
    })
  }

  deletePersonHandler= (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  toggelPersonHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }


  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #000',
      padding: '8px',
      cursor: 'pointer',
      
    }

    let pesrons= null;

    if(this.state.showPersons){
        pesrons= <div>
        {
            this.state.persons.map((person,index)=>{
            return <Person 
                      name={person.name} 
                      age={person.age}
                      click={()=>this.deletePersonHandler(index)}
                      key={person.id}
                      changed={(event)=>this.nameChangeHandler(event,person.id)}/>
          })
        }
        </div>;

        style.backgroundColor = 'red';
        

       

    }

    let classes = [];
    if(this.state.persons.length<=2)
    {
      classes.push('red');
    }
    if(this.state.persons.length<=1)
    {
      classes.push('bold');
    }

    return (
    
    <div className="App">
      <h1>Example set for</h1>
      <p className={classes.join(' ')}> It's working</p>
      <button style={style} onClick={this.toggelPersonHandler}>Toggle</button>
      {pesrons}
    </div>  


  
  );
  }
  
}

export default App;
