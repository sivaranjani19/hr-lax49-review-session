import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentStudent: {},
    // index:0,
    // name: '',
    // image: ''
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    // Todo: Add your logic here to grab one random student
    this.setState({
      currentStudent: this.props.students[ind],
      // index: ind,
      // name: this.props.students[this.state.index].name,
      // image: this.props.students[this.state.index].imgurl
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.currentStudent.imgurl}></img>
          <h1>{this.state.currentStudent.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}