/**
 * Pure container component 
 */

import React, {PureComponent} from 'react';
import './index.css';

class ContainerLayout extends PureComponent{
    render(){
        return (
            <div className="row appContainer" style={{backgroundColor: this.props.color}}>
                <div className="col-xs-12"> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}




export default ContainerLayout;