import React from 'react';
import Block from './Block';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                blocks:[
                    {textColumn: "pink", backgroundColor: "purple"},
                    {textColumn: "yellow", backgroundColor: "orange"}
                ]
            }
    }

    renderBlocks() {
        return this.state.blocks.map((block) => {
            return <Block backgroundColor={block.backgroundColor} textColumn={block.textColumn} />
        })
    }
    render() {
        this.renderBlocks();
        return(
            <div className="container">
                {this.renderBlocks()}
            </div>
        )
    }
   
}
export default App;


