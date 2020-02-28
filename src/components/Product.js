import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
       this.state = {
           title: 'lifeCycle'
       }
        this.addToCart2 = this.addToCart2.bind(this);
    }


    addToCart = () => {
        alert('hello');
    }
    addToProduct = (x) => {
        alert(x);
    }
    addToCart2() {
        alert(this.props.children);
    }
    render() {
        return (
            <div className="col-sm-12 col-md-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.children}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-price">{this.props.price} VND</p>
                        <a href="#" className="btn btn-primary" onClick={this.addToCart}>Mua ngay</a>
                        <a href="#" className="btn btn-success mx-2" onClick={this.addToProduct.bind(this, 'hahah')}>Mua luôn</a>
                        <a href="#" className="btn btn-danger mt-2" onClick={this.addToCart2}> Xóa</a>
                    </div>
                </div>
            </div>
        )
    }
}
