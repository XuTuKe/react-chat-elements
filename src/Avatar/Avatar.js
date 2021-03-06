import React, { Component } from 'react';
import './Avatar.css';

const classNames = require('classnames');

export class Avatar extends Component {
    render() {
        return (
            <div className={classNames('rce-avatar-container', this.props.type, this.props.size, this.props.className)}>
                <img
                    alt={this.props.alt}
                    src={this.props.src}
                    onError={this.props.onError}
                    className={'rce-avatar'} />
                {this.props.sideElement}
            </div>
        );
    }
}

Avatar.defaultProps = {
    type: 'default',
    size: 'default',
    src: '',
    alt: '',
    sideElement: null,
    onError: () => void(0),
};

export default Avatar;
