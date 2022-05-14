import React, { Component } from 'react';

export default class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            header: props.header
        }
    }
    render() {
        return(
            <div className='grid-container'>
                <div className='grid-item'>
                    {this.state.header === "Products" &&
                        <button>Create product</button>}
                </div>
                <div className='grid-item'>
                    <h1>{this.state.header}</h1>
                </div>
                <div className='grid-item'>
                </div>
            </div>
        );
    }
}