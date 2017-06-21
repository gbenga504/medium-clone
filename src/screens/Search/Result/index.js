import React, {PureComponent} from 'react';
import {PlainCard} from '../../../containers/cards';

class Result extends PureComponent{
    render(){
        return (
            <div className="row">
            	<div className="col-xs-12 col-sm-6">
                    <PlainCard />
                    <PlainCard />
                    <PlainCard />
                </div>
            </div>
        )
    }
}

export default Result;