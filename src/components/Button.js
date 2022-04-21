import React from 'react';

export class Button extends React.Component {
  state = {
    value: 0
  };

  onPlus= () => {
    this.setState({
      value: this.state.value +1
    });
        
  };  
    
  onMinus = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  // componentDidMount(){
  //     console.log("Komponen berhasil ditampilkan!")
  // }
    
  // componentDidUpdate(){
  //     console.log("Komponen berhasil di update!")
  // }

  // componentWillUnmount(){
  //     console.log("Komponen dihilangkan!")
  // }

  render(){
    return (
      <div className="col-6 d-flex counting ">
        <button className="minus " onClick={this.onMinus}>-</button>
        <div type="number" className="count" name="qty">{this.state.value}</div>
        <button className="plus " onClick={this.onPlus}>+</button>
      </div>
    );
  }


}


export default Button;