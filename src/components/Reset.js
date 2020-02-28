import React from 'react';
 
class Reset extends React.Component {
    resetApp = () => {
        this.props.onSettingDefault();
    }
  render() {
    return (
        <button type="button" className="btn btn-primary mt-2 ml-2" onClick={this.resetApp}>Reset</button>
    );
  }
}

export default Reset;
