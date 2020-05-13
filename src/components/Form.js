import React from 'react';
 
class Form extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
 
export default Form;

