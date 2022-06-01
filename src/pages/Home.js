import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum';

const Home = () => {
    return (
    <div className='home'>
        <h1 className='subTitle'> Welcome to our page!</h1>
        <p>{loremIpsum({ p: 2 })}</p>
        <p>{loremIpsum({ p: 2 })}</p>
    </div>
    )
}

export default Home