import React, { Component } from 'react';
import calculate from '../logic/calculate.js';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            next: '',
            operation: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        console.log({...this.state})
        this.setState(calculate({...this.state}, e.target.value));
    }
    render() {
        return (
            <table className='calculator'>
                <tbody>
                    <tr>
                        <td colSpan={4}><input className='displayBox' type='text' value={this.state.next || this.state.total || '0'} disabled/></td>
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value='AC' onClick= {this.handleClick}/></td>
                    <td><input className='button' type='button' value='+/-' onClick= {this.handleClick}/> </td>
                    <td><input className='button' type='button' value='%' onClick= {this.handleClick}/></td> 
                    <td><input className='button orange' type='button' value='÷' onClick= {this.handleClick}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value={7} onClick= {this.handleClick}/></td>
                    <td><input className='button' type='button' value={8} onClick= {this.handleClick}/></td> 
                    <td><input className='button' type='button' value={9} onClick= {this.handleClick}/></td> 
                    <td><input className='button orange' type='button' value='x' onClick= {this.handleClick}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value={4} onClick= {this.handleClick}/></td>
                    <td><input className='button' type='button' value={5} onClick= {this.handleClick}/></td> 
                    <td><input className='button' type='button' value={6} onClick= {this.handleClick}/></td> 
                    <td><input className='button orange' type='button' value='-' onClick= {this.handleClick}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value={1} onClick= {this.handleClick}/></td>
                    <td><input className='button' type='button' value={2} onClick= {this.handleClick}/></td> 
                    <td><input className='button' type='button' value={3} onClick= {this.handleClick}/></td> 
                    <td><input className='button orange' type='button' value='+' onClick= {this.handleClick}/></td>
                    </tr>
                    <tr>
                    <td colSpan={2}><input className='button' type='button' value={0} onClick= {this.handleClick}/></td>
                    <td><input className='button' type='button' value='.' onClick= {this.handleClick}/></td> 
                    <td><input className='button orange' type='button' value='=' id='equal' onClick={this.handleClick}/></td> 
                    </tr>
                </tbody>
            </table>
        )
    }
}
