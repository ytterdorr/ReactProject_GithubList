import React from 'react';
// import Link from '../Link/Link';
import logo from '../../assets/GitHub-Mark-64px.png';
// import './Header.css';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
background-color: #282c34;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px+2vmin);
color: white;
`;

const Logo = styled.img`
height: 64px;
pointer-event: none;
`;

const Header = () => (
    <HeaderWrapper>
        <Logo src={logo} className="App-logo" alt="logo" />
        <h1>My Gitghub Profile</h1>
    </HeaderWrapper>
);

export default Header;