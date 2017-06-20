import React, {PureComponent} from 'react';
import {Container} from '../../../containers/Layout';
import './index.css';

class Info extends PureComponent{
    render(){
        return (
            <div className="row info">
                <div className="col-xs-12">
                    <div id="imageIcon">
                        <img src="" alt="commenter's image" />
                    </div>
                    <div id="commenter_info">
                        <div className="writer_name">Anifowoshe Gbenga David</div>
                        <div className="time"> June 26th 2017. </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;