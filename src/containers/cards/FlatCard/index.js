import React, {PureComponent} from 'react';
import Bottom from './Bottom';
import './index.css';

class FlatCard extends PureComponent{
    render(){
        return (
            <div className="col-sm-6 col-xs-12" style={{marginBottom: "20px"}}>
                <div className="col-xs-12">
                    <div className="row" id="card">
                        <div className="col-xs-4" id="newsDisplayHolder">

                        </div>
                        <div className="col-xs-8" id="content">
                            <div className="col-xs-12 title">Building design process within teams</div>
                            <div className="col-xs-12 body">A practical workflow to manage design projects </div>
                            <Bottom />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlatCard;