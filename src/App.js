import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Navbar"
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    filter: ""
  };

  handleInputChange = event => {
    this.setState({ filter: event.target.value });
    console.log(this.state.filter)

  }

  filterEmployee = event => {
    event.preventDefault();
    const employees = this.state.employees.filter(employee => employee.name === this.state.filter);
    this.setState({ employees });
    console.log("employee: " + this.state.employees)
    console.log(this.state.filter)
  }

  sortEmployeeName = () => {
    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name){
        return 1;
      }
      return 0;
    } 
    const employees = this.state.employees.sort( compare );
    this.setState({ employees })
  }

  sortEmployeeOccupation = () => {
    function compare( a, b ) {
      if ( a.occupation < b.occupation ){
        return -1;
      }
      if ( a.occupation > b.occupation){
        return 1;
      }
      return 0;
    } 
    const employees = this.state.employees.sort( compare );
    this.setState({ employees })
  }

  sortEmployeeLocation = () => {
    function compare( a, b ) {
      if ( a.location < b.location ){
        return -1;
      }
      if ( a.location > b.location){
        return 1;
      }
      return 0;
    } 
    const employees = this.state.employees.sort( compare );
    this.setState({ employees })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Jumbotron>Empolyee Directory</Jumbotron>
        <Nav
        sortEmployeeName ={this.sortEmployeeName}
        sortEmployeeOccupation = {this.sortEmployeeOccupation}
        sortEmployeeLocation = {this.sortEmployeeLocation}
        filterEmployee = {this.filterEmployee}
        handleInputChange = {this.handleInputChange}
        />
        {this.state.employees.map(employee => (
          <FriendCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
