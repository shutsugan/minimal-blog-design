import React, {Component} from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

import '../css/Head.css';

class Head extends Component {
    onClick = event => {
        this.props.onClick(event);
    }

    render() {
        return(
            <header className="Head">
                <Logo />
                <h1 className="Head__title">{this.props.title}</h1>
                <Navigation onClick={this.onClick} />
            </header>
        );
    }
}

export default Head;