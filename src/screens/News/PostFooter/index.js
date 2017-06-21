import React, {Component} from 'react';
import Section from './Section';
import './index.css';

class PostFooter extends Component{
    render(){
        return(
            <div className="footer">
                <div className="col-xs-12">
                    <Section />
                </div>
            </div>
        )
    }
}

export default PostFooter; 