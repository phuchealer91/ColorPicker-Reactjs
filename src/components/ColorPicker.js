import React from 'react';
 
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          colors : ['red','green','blue','#ccc'],
          images: [
              'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2020_02_22/quynhanhshyn_83456053_285761985733376_5447303552977277765_n.jpg',
              'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2020_02_22/thaonhile_80844161_2673363489413664_1276909322736612611_n.jpg',
              'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2020_02_22/chipupu_82841139_857755504681149_4114126273817628938_n.jpg',
              'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2020_02_22/lehatruc_66291989_1234510196722381_9182974186684250279_n.jpg'
          ]
        }
      }

      showColor = (color) => {
          return {
              background: color
          }
      }
    //   image
    showImage = (image) => {
        return {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }
      setActiveColor = (color) => {
       this.props.onRetrieveColor(color);   //truyen qua component cha
      }
      //image
      setActiveImage = (image) => {
       this.props.onRetrieveImage(image);   //truyen qua component cha
      }
      
  render() {
      let elements = this.state.colors.map((color,index)=>{
            return <span 
            key={index} 
            style={this.showColor(color)} 
            className={this.props.color === color ? 'active' : ''}
            onClick={()=>{this.setActiveColor(color)}}
            >
            </span>
      })

      
      let images = this.state.images.map((image,index)=>{
        return <span key={index} 
            style={this.showImage(image)} 
            className={this.props.backgroundImage === image ? 'active' : ''}
            onClick={()=>{this.setActiveImage(image)}}>
            
        </span>
      })
    return (
        <div className="col-sm-12 col-md-6">
        <div className="card mb-2">
          <div className="card-header bg-success">
            Color Picker
     </div>
          <div className="card-body">
            {elements}
          </div>
          <div className="card-body">
            {images}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
