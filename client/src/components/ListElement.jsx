import React from 'react';
import axios from 'axios';
//const ListElement = ({student}) => (
class ListElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
    this.updateName = this.updateName.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
   // console.log("TEST === ", e.target.value);
   this.setState({
     name: e.target.value
   })
  }
  updateName(e) {
    e.preventDefault();
  axios.put(`/class/students/${this.props.student.id}`, {
    name: this.state.name
  })
  .then(response => {+
    console.log('Response after update = ', response.data);
  })
  .catch(error => {
  console.log(error);
  });
  }
  render() {
    return (
      <div>
      <form>
      <input type="text" name='edit' onChange={this.changeHandler}></input>
        <button type="submit" value="submit" onClick={this.updateName}>Edit name</button>
        <div>{this.props.student.name}</div>
        <img src={this.props.student.imgurl}></img>
      </form>

      </div>


    )
  }
}

//<span>
//   <div>Julian</div>
//   <img src='https://ca.slack-edge.com/T02DNK3PH-UD0AF2EBH-73605fa7261b-512'></img>
// </span>
//);

export default ListElement;