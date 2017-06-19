import React, {PureComponent} from 'react';
import Card from '../../../containers/cards';

class Section extends PureComponent{
    render(){
        return (
            <div className="row" style={{marginTop: 50}}>
                <div>
                    <div className="row">
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;