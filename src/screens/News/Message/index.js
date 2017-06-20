import React, {PureComponent} from 'react';
import './index.css';

class Message extends PureComponent{
    render(){
        return (
            <div className="row message">
                <div className="col-xs-12 text-justify messageBody">
                    I love my life
                </div>
            </div>
        )
    }
}

export default Message;