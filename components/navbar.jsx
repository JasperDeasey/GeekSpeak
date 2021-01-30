import React, { useState } from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction, Container } from '@material-ui/core';
import { RestoreOutlined, SettingsVoiceOutlined, FindInPageOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const StyledBottomNav = styled(BottomNavigation)`
    display: flex;
    border-radius: 1em;
    background: ${(props) => props.theme.palette.primary.light};
    height: 6rem;
`;

const StyledNavButton = styled(BottomNavigationAction)`
    background: ${(props) => props.theme.palette.secondary.light};
    border-radius: 2em;
    height: 75%;
    margin: auto;
    padding: 0 0 !important;
    font-size: 6rem;
`;

const Navbar = () => {
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="md">
            <StyledBottomNav value={value} onChange={handleChange}>
                <Link href="/history">
                    <StyledNavButton value={'history'} icon={<RestoreOutlined />} />
                </Link>

                <Link href="/">
                    <StyledNavButton value={'home'} icon={<SettingsVoiceOutlined />} />
                </Link>

                <Link href="/results">
                    <StyledNavButton value={'results'} icon={<FindInPageOutlined />} />
                </Link>
            </StyledBottomNav>
        </Container>
    );
};

export default Navbar;
