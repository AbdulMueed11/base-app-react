import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <div className="Hello">
            <div className="Hello-header">
                <strong>Assignment # 2</strong>
            </div>
            <div className="body-text">
                Hi I am <strong> {props.name} </strong> age {props.age}
                <ol>
                    <li>Cake</li>
                    <li>Cake</li>
                    <li>Cake</li>
                </ol>
            </div>
        </div>
    )
}

export default Hello;
