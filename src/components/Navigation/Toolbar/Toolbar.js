import React from 'react';

import classes from './Toolbar.css';

const toolbar = (props) => {
    const navClass = [classes.PrimartNav, classes.Grouping].join(' ');
    return (
        <header className={classes.Toolbar}>
            <nav className={navClass}>
                figure
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default toolbar;