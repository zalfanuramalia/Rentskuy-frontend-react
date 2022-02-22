import React from "react"

export class Button extends React.Component {
    state = {
        angka: 1
    }

    ubahAngka = () => {
        this.setState({angka: 0})
    }    

    componentDidMount(){
        console.log("Komponen berhasil ditampilkan!")
    }
    
    componentDidUpdate(){
        console.log("Komponen berhasil di update!")
    }

    componentWillUnmount(){
        console.log("Komponen dihilangkan!")
    }

    render(){
        return (
            <div className="but">
                <button onClick={this.ubahAngka}>-</button>
                <div>{this.props.angka}</div>
                <button variant="contained" onClick={this.ubahAngka}>+</button>
            </div>
        )
    }


}


export default Button