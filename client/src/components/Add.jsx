import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgurl: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e){
    // Todo: Add your code here to handle the data the client inputs
    this.setState({
      [e.target.name] : e.target.value
    });
   // console.log([e.target.name] : e.target.value.name);

  }

  handleSubmit(e) {
    e.preventDefault();
   // console.log("Submit Invoked",this.state.imgurl);
    // Todo: Add your code here to handle the API requests to add a student and image
   axios.post('/class/students/', { name: this.state.name })
   .then(axios.post('/class/images', { imgurl: this.state.imgurl }))
   .then(alert('New student added!'))
   .then(this.props.getStudents())
   .catch((err) => console.error(err));
   }


  showPreview(){
    return (
      // {console.log("showPreview called")};
      (this.state.name && this.state.imgurl) ? (
        <div>
          <img src={this.state.imgurl}></img>
          <h2>{this.state.name}</h2>
        </div>
      ) : (
        <div>
          Fill out the form and a preview will appear here...
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        <form >
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={this.changeHandler} />
          <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        <h1>Preview:</h1>
        <div>{this.showPreview()}</div>
      </div>
    )
  }
}