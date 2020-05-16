import React, {Component} from 'react'
import Form from './Form2.js'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
    isInvalidNumber: "" // use empty string to indicate that string value is assigned
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
 
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.dir(event.target)

    this.setState({
      firstName: event.target[0].value
    })

    if (this.state.firstName.length < 4) {
        this.setState({
          isInvalidNumber: `${event.target[0].value} is a cool name but it's too short!`
      })
    } 
  }

 
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleSubmit={this.handleSubmit}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}
