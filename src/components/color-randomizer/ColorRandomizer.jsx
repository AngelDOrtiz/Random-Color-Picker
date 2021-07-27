/* eslint-disable max-len */
import React, { Component } from 'react';
import Display from '../display/Display';


class ColorRandomizer extends Component {  
state = {
  color: 'purple',
}


randomColor = () => {
    
  const colors = ['purple', 'orange', 'cyan', 'aquamarine', 'yellow', 'maroon', 'red'];
    
  const randomNumber = Math.floor(Math.random() * colors.length);
  this.setState({ color: colors[randomNumber] });
}

componentDidMount = () => {
  this.interval = setInterval(() => ({ color: this.randomColor() }), 1000);
}
render(){ 
  const { color } = this.state;
  return (
    <>
      <Display backgroundColor={ color }/>
    </>
            
  );
}
}

export default ColorRandomizer;
