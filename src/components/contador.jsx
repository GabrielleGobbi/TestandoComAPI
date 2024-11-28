import React, { Component } from "react";

 class Contador extends Component {
 constructor(props){
  super(props)
  this.state = {count: 0}
 }
 incrementar = () => {
  this.setState({count: this.state.count + 1})
 }
 render (){
  return (
    <div>
    <h1>
      Contador: {`${this.state.count} valor state`}
    </h1>
    <button onClick={this.incrementar}> Incrementar</button>
 
    </div>
  );
}
 }
 function App (){
  return (
    <div>
 <Contador />
    </div>
  )
 }
  
  
export default App;