import React, { Component } from 'react'

export default class Life extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps' + nextProps.name);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate da chay cua Life.js');
        return true;
      }
    
      componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate da chay cua Life.js');
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate da chay cua Life.js');
      }
      
    
    render() {
        console.log('render cua Life.js');
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
