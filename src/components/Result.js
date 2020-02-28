import React from 'react';
class Result extends React.Component {
    setStyle = () => {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize,
            backgroundImage: `url(${this.props.backgroundImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }
    // setImage = () => {
    //     return {
    //         backgroundImage: `url(${this.props.backgroundImage})`,
    //         backgroundPosition: 'center',
    //         backgroundSize: 'contain',
    //         backgroundRepeat: 'no-repeat'
    //     }
    // }
  render() {
    return (
        <div className="display-text"
        >
            <p> Color: {this.props.color} - fontSize: {this.props.fontSize}px</p>
            <p 
            className="txt"
            style={this.setStyle()} //phai co () danh dau function
            >Because I love You !</p>
        </div>
    );
  }
}

export default Result;
