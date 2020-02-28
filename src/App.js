import React from 'react';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import ColorPicker from './components/ColorPicker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12,
      backgroundImage: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2020_02_22/chipupu_82841139_857755504681149_4114126273817628938_n.jpg'
    }
  }
  onSetColor = (params) => {
    this.setState({
      color: params
    })
  }
  //image
  onSetImage = (params) => {
    this.setState({
      backgroundImage: params
    })
  }
  onSetSize = (value) => {
    if (this.state.fontSize + value >= 12 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }
  onSettingDefault = () => {
    this.setState({
      color: 'red',
      fontSize: 12,
      backgroundImage: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2020_02_22/chipupu_82841139_857755504681149_4114126273817628938_n.jpg'

    })
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <div className="row">
            <ColorPicker
              color={this.state.color}
              fontSize={this.state.fontSize}
              onRetrieveColor={this.onSetColor}

              backgroundImage={this.state.backgroundImage}
              onRetrieveImage={this.onSetImage}
            />
            <div className="col-sm-12 col-md-6">
              <SizeSetting
                fontSize={this.state.fontSize}
                onRetrieveSize={this.onSetSize}
              />
              <Reset
                onSettingDefault={this.onSettingDefault}
              />
            </div>
            <Result
              color={this.state.color}
              fontSize={this.state.fontSize}
              backgroundImage={this.state.backgroundImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
