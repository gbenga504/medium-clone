import React, {PureComponent} from 'react';
import {Container} from '../../containers/Layout';
import Info from './Info';
import Title from './Title';
import Message from './Message';
import AltIcon from './AltIcon';


class News extends PureComponent{
    render(){
        return (
            <Container color="#fff">
                <div className="row">
                    <div className="col-xs-12">
                        <Info />
                        <Title />
                        <Message />
                        <AltIcon />
                    </div>
                </div>
            </Container>
        )
    }
}

export default News;