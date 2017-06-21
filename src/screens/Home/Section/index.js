import React, {PureComponent} from 'react';
import {FlatCard} from '../../../containers/cards';

class Section extends PureComponent{
    render(){
        return (
            <div className="row" style={{marginTop: 50}}>
                <div>
                    <div className="row">
                        <FlatCard />
                        <FlatCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;