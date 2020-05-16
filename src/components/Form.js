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

    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }

    console.log('submitted formData', formData)

    // let dataArray = this.state.submittedData.concat(formData)
    // // Do NOT use state value directly when setting state
    // this.setState({submittedData: dataArray})

    // alternative way by passing a callback to setState method
    this.setState(previousState => { 
      return {
        submittedData: previousState.submittedData.concat(formData)
      }})
  }
 
  listOfSubmissions = () => {
    console.log(this.state.submittedData)
    return this.state.submittedData.map((data, index) => {
      return <div key={index} ><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    console.log(this.state.firstName)
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} defaultValue="Uriel" />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
