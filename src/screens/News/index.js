import React, {PureComponent} from 'react';
import {ContainerLayout} from '../../containers/Layout';
import Info from './Info';
import Title from './Title';
import Message from './Message';
import AltIcon from './AltIcon';
import PostFooter from './PostFooter';


class News extends PureComponent{
    render(){
        return (
            <div className="row">
            	<div className="col-xs-12">
                    <ContainerLayout color="#fff">
                        <div className="row">
                            <div className="col-xs-12">
                                <Info />
                                <Title />
                                <Message />
                                <AltIcon />
                            </div>
                        </div>
                    </ContainerLayout>
                </div>
                <PostFooter />
            </div>
        )
    }
}

export default News;