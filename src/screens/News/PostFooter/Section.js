import React, {PureComponent} from 'react';
import {FlatCard} from '../../../containers/cards';
import Linking from '../../../containers/Linking';

class Section extends PureComponent{
    render(){
        return (
            <div className="row" style={{marginTop: 50}}>
                <div className="col-xs-12">
                    <div className="row">
                        <Linking to="/news/5">
                            <FlatCard />
                        </Linking>
                        <Linking to="/news/5">
                            <FlatCard />
                        </Linking>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;