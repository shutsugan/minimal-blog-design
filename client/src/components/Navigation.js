import React, {Component} from 'react';
import Icon from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';

import '../css/Navigation.css';

class Navigation extends Component {
    onClick = event => {
        this.props.onClick(event);
    }

    render() {
        return(
            <div className="Navigation" onClick={this.onClick}>
                <Icon icon={menu}/>
            </div>
        );
    }
}

export default Navigation;