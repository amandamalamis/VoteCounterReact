import React from 'react';

class Block extends React.Component{
    constructor (props){
        super(props);
        this.state = {
        count: 0,
        text: "Click to vote for me!!!",
        hovers: false,
        name: "Howard",
        }
    }

    updateCount = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const { backgroundColor, textColumn } = this.props;
        const style = (this.state.hovers)
        ? {
            backgroundColor: backgroundColor,
            border: `8px solid ${this.props.textColumn}`
        } : {
            backgroundColor: backgroundColor,
            border: `8px solid ${this.props.backgroundColor}`
        }
        return (
            
            <div 
            onMouseEnter={() => this.setState({hovers: true})}
            onMouseLeave={() => this.setState({hovers: false})}
            onClick={this.updateCount} 
            style={style} className="block">
            <h1> Hello, {this.state.name} </h1>
            <h2> {this.state.text} </h2>
            <button onClick={ () => this.setState({ text: 'You clicked the button!!' }) } > {this.state.count} </button>

            <h3 style={{color:textColumn}}>{textColumn} on {backgroundColor}</h3>
            <h1 style={{color:textColumn}}>{this.state.count}</h1>
            </div>
        );
    }
}
export default Block;


