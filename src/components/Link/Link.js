import React from 'react';
import styled from 'styled-components';
import './Link.css';

const InnerLink = styled.a`
color: #61dafb;
`;

function Link({ url, title }) {
    return (
        <InnerLink
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            {title}
        </InnerLink>
    );
}

export default Link;