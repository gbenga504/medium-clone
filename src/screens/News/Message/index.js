import React, {PureComponent} from 'react';
import './index.css';

class Message extends PureComponent{
    render(){
        return (
            <div className="row message">
                <div className="col-xs-12 text-justify messageBody">
                    {this.props.body}
                </div>
            </div>
        )
    }
}

export default Message;