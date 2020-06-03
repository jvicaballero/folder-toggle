import React, { Component } from 'react';
//import PropTypes from "prop-types";

class ToggleFolder extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            value: props.name,
            isHidden: true,
        };
        
    }

    
    handleHide = () => {
            this.setState({ 
                isHidden: false
            })
    }

    handleShow = () => {
            this.setState({
                isHidden: true
            })
    }

    render(){
        return(
            <div>
            <p>{this.state.value}</p>

            {this.state.isHidden ? 
            <ul>
                <li>File1</li>
                <li>File2</li>
                <li>File3</li>
            </ul>
            : null
    }

            <button onClick={() => this.handleHide() }>Hide Files</button>
            
            <button onClick={() => this.handleShow() }>Show Files</button>
            </div>
        );

        }
}

export default ToggleFolder
