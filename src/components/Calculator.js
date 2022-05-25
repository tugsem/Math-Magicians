import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.display = this.display.bind(this);
        this.clearScreen = this.clearScreen.bind(this);
        this.calculate = this.calculate.bind(this);
        this.toggleSign = this.toggleSign.bind(this);
    }
    display() {

    }
    clearScreen() {

    }
    calculate() {

    }
    toggleSign() {

    }

    render() {
        return (
            <table className='calculator'>
                <tbody>
                    <tr>
                        <td colSpan={4}><input className='displayBox' type='text' id='result' value={0} disabled/></td>
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value='AC' onClick= {this.clearScreen()}/></td>
                    <td><input className='button' type='button' value='+/-' onClick= {this.toggleSign()}/> </td>
                    <td><input className='button' type='button' value='%' onClick= {this.display('%')}/></td> 
                    <td><input className='button orange' type='button' value='/' onClick= {this.display('/')}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value='7' onClick= {this.display('7')}/></td>
                    <td><input className='button' type='button' value='8' onClick= {this.display('8')}/></td> 
                    <td><input className='button' type='button' value='9' onClick= {this.display('9')}/></td> 
                    <td><input className='button orange' type='button' value='X' onClick= {this.display('X')}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value='4' onClick= {this.display('4')}/></td>
                    <td><input className='button' type='button' value='5' onClick= {this.display('5')}/></td> 
                    <td><input className='button' type='button' value='6' onClick= {this.display('6')}/></td> 
                    <td><input className='button orange' type='button' value='-' onClick= {this.display('-')}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value='1' onClick= {this.display('1')}/></td>
                    <td><input className='button' type='button' value='2' onClick= {this.display('2')}/></td> 
                    <td><input className='button' type='button' value='3' onClick= {this.display('3')}/></td> 
                    <td><input className='button orange' type='button' value='+' onClick= {this.display('+')}/></td>
                    </tr>
                    <tr>
                    <td colSpan={2}><input className='button' type='button' value='0' onClick= {this.display('0')}/></td>
                    <td><input className='button' type='button' value='.' onClick= {this.display('.')}/></td> 
                    <td><input className='button orange' type='button' value='=' id='equal' onClick={this.calculate()}/></td> 
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Calculator