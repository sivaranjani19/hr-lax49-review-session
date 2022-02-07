import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Add from './Add.jsx';
import Random from './Random.jsx';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentlist : []
    }
    this.changepage= this.changepage.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents();
  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get(`/class/students`)
    .then((response) => {
      //console.log('Response : ', response.data);
      this.setState({
        studentlist: response.data
      })
    })
      .catch((error) => {
        console.log(error);
      })
    }
  changepage(e){
    // Todo: Add your logic to "change pages" here on button click
    this.setState({
      page: e.target.value
    });

  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <Add getStudents={this.getStudents}/>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <List students={this.state.studentlist} getStudents={this.getStudents}/>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <Random students={this.state.studentlist}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Student Cold-Caller</h1>
          <button value='add' onClick={this.changepage}>Add Student</button>
          <button value='list' onClick={this.changepage}>List Students</button>
          <button value='random' onClick={this.changepage}>Random Student</button>
        </div>
      )
    }
  }
}