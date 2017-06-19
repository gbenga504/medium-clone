import React, {PureComponent} from 'react';
import Card from '../../../containers/cards';

class Section extends PureComponent{
    render(){
        return (
            <div class="row" style={{marginTop: 50}}>
                <div class="container">
                    <div class="row">
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;