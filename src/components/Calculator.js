import React, { useState } from 'react';
import calculate from '../logic/calculate.js';

export default function Calculator() {
   const [result, setResult] = useState({total: '', next: '', operation: ''});
    const handleClick = (e) => {
        setResult(calculate(result, e.target.value));
    }
    return (
            <table className='calculator'>
                <tbody>
                    <tr>
                        <td colSpan={4}><input className='displayBox' type='text' value={result.next || result.total || '0'} disabled/></td>
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value='AC' onClick= {handleClick}/></td>
                    <td><input className='button' type='button' value='+/-' onClick= {handleClick}/> </td>
                    <td><input className='button' type='button' value='%' onClick= {handleClick}/></td> 
                    <td><input className='button orange' type='button' value='÷' onClick= {handleClick}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value={7} onClick= {handleClick}/></td>
                    <td><input className='button' type='button' value={8} onClick= {handleClick}/></td> 
                    <td><input className='button' type='button' value={9} onClick= {handleClick}/></td> 
                    <td><input className='button orange' type='button' value='x' onClick= {handleClick}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value={4} onClick= {handleClick}/></td>
                    <td><input className='button' type='button' value={5} onClick= {handleClick}/></td> 
                    <td><input className='button' type='button' value={6} onClick= {handleClick}/></td> 
                    <td><input className='button orange' type='button' value='-' onClick= {handleClick}/></td> 
                    </tr>
                    <tr>
                    <td><input className='button' type='button' value={1} onClick= {handleClick}/></td>
                    <td><input className='button' type='button' value={2} onClick= {handleClick}/></td> 
                    <td><input className='button' type='button' value={3} onClick= {handleClick}/></td> 
                    <td><input className='button orange' type='button' value='+' onClick= {handleClick}/></td>
                    </tr>
                    <tr>
                    <td colSpan={2}><input className='button' type='button' value={0} onClick= {handleClick}/></td>
                    <td><input className='button' type='button' value='.' onClick= {handleClick}/></td> 
                    <td><input className='button orange' type='button' value='=' id='equal' onClick={handleClick}/></td> 
                    </tr>
                </tbody>
            </table>
    )
}
