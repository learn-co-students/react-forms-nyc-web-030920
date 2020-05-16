import React, {Component} from 'react'
// import ParentComponent from './ParentComponent'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form 
        onSubmit={event => {
          return this.props.handleSubmit(event)
          }}>
          <input
            type="text"
            // onChange={event => this.props.handleFirstNameChange(event)}
            // value={this.props.formData.firstName}
          />
          <input
            type="text"
            // onChange={event => this.props.handleLastNameChange(event)}
            // value={this.props.formData.lastName}
          />
          <input 
          type="submit" 
          />
        </form>
      </div>
    )
  }
}
