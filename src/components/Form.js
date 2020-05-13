import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
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
    let formData={firstName: this.state.firstName, lastName: this.state.lastName }
    this.sendFormDataSomewhere(formData)

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input onChange={event=>this.handleFirstNameChange(event)}type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input onChange={event => this.handleLastNameChange(event)} type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;