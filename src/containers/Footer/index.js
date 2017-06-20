import React, {PureComponent} from 'react';
import NavigationalFooter from './NavigationalFooter';
import './index.css';

class Footer extends PureComponent{
    render(){
        return (
            <div className="footer">
                <span className="tag">Help</span>
                <span className="tag">Privacy</span>
                <span className="tag">About</span>
            </div>
        )
    }
}

export default Footer;
export {NavigationalFooter};