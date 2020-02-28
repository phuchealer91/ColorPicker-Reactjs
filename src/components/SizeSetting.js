import React from 'react';
 
class SizeSetting extends React.Component {

    changeSize = (value) => {
        this.props.onRetrieveSize(value);
    }
  render() {
    return (
        <div className="card mb-2">
        <div className="card-header bg-danger">
          Size: {this.props.fontSize}px
        </div>
        <div className="card-body">
        <p className="size-change"></p>
        <button type="button" className="btn btn-success mt-2" onClick={() => this.changeSize(2)}>
          Tăng
        </button>
        <button type="button" className="btn btn-danger mt-2 ml-2" onClick={()=>this.changeSize(-2)}>
          Giảm
        </button>
        </div>
        
      </div>
    );
  }
}

export default SizeSetting;
