import React, {PureComponent} from 'react';
import Card from '../../../containers/cards';

class Section extends PureComponent{
    render(){
        return (
            <div className="row" style={{marginTop: 50}}>
                <div className="col-xs-12">
                    <div className="container">
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;