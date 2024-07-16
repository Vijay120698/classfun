import logo from './logo.svg';
import React from 'react';
import './App.css';
import Employee from './components/Employee'

class Firstcom extends React.Component
{
  render()
  {
    return (
      <div>
        <h1>Firstcomponents.....</h1>
      </div>
    )
  }
}

class Secondcom extends React.Component
{

  render(){
       return(
          <div><h2>Secondcomponents....</h2></div>
       )
  }

}

function Thirdcom()
{
  return(
    <div>
      <h3>thirdcomponents.........</h3>
    </div>
  )
}



function App() {
  return (
    <div className="App">
   <Firstcom></Firstcom>
   <Secondcom/>
   <Thirdcom/>
   <Employee name='vijay'
              empid='301642'>

    </Employee>

    </div>
  );
}

export default App;
