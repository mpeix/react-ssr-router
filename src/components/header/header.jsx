import React from 'react';
import Nav from '../navBar/nav.jsx';

function Header(props){
    console.log('header');
    return <header>
        <Nav routes={props.routes}/>
        <h1>This is the title .</h1>
        <h2>This is the subtitle</h2>
    </header>
}

export default Header;