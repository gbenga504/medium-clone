import React, {PureComponent} from 'react';
import {Container} from '../../containers/Layout';
import Header from './Header';
import Form from './Form';


class Post extends PureComponent{
    render(){
        return (
            <div className="row">
            	<div className="col-xs-12">
                    <Header />
                    <Container color="#fff">
                        <div className="row">
                            <div className="col-xs-12">
                                <Form />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Post;