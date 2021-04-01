import React from 'react'
import './Nav.css';
import brain from './utilities/brain.png';
import eth from './utilities/eth.png';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const Nav = () => {
    return (
        <div className='nav'>
            {/* left */}
            <div className='nav-top'>
            <div className='nav-lft'>
                <img src= {brain} alt='logo' className='logo'/>
            </div>
            <div className='nav-rgt'> 
                <img src={eth} alt='ethereum' className='eth-logo' />
                <button className='wlt_btn' >Connect Wallet</button>
                <button className='per_btn'> <PermIdentityIcon /> </button>
            </div>
            
            </div>
            <hr className='hr_line'/>
            {/* bottom */}
            <div className='nav-btm'>
                <input type='text' className='int_data' /> 
            </div>
                <hr className='hr_line'/>
        </div>
    )
}

export default Nav
