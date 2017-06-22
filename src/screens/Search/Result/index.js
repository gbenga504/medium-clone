import React, {PureComponent} from 'react';
import {PlainCard} from '../../../containers/cards';
import Linking from '../../../containers/Linking';

class Result extends PureComponent{
    render(){
        return (
            <div className="row">
            	<div className="col-xs-12 col-sm-6">
                    <Linking to="/news/5">
                        <PlainCard />
                    </Linking>
                    <Linking to="/news/5">
                        <PlainCard />
                    </Linking>
                    <Linking to="/news/5">
                        <PlainCard />
                    </Linking>
                </div>
            </div>
        )
    }
}

export default Result;