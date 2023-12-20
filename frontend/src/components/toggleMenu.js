import React, { useState } from 'react';
import { IconButton, Menu,MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const ToggleMenu = ({ menuItems }) => {
    const [anchorE1, setAnchorE1] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorE1(null);
    };

    return (
        <div>
            <IconButton onClick={handleMenuOpen}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorE1}
                open={Boolean(anchorE1)}
                onClose={handleMenuClose}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                        <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {item.label}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default ToggleMenu;