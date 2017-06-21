import React, {PureComponent} from 'react';
import Bottom from './Bottom';
import './index.css';
import PlainCard from './PlainCard';
import MaterialCard from './MaterialCard';

class Card extends PureComponent{
    render(){
        return (
            <div className="col-sm-6 col-xs-12">
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

export default Card;
export {PlainCard, MaterialCard};