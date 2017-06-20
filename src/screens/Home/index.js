import React, {PureComponent} from 'react';
import {Container} from '../../containers/Layout';
import Header from './Header/';
import {SubHeader, TextRight, ButtonRight} from './SubHeader/';
import Section from './Section';
import Footer from '../../containers/Footer';

class Home extends PureComponent{
    render(){
        return (
            <Container color="#FBFCFD">
                <div className="row">
                    <div className="col-xs-12">
                        <Header />
                        <SubHeader title="Latest News">
                            <TextRight title="More"/>
                        </SubHeader>
                        <Section />
                        <SubHeader title="Live Updates">
                            <ButtonRight title="Follow"/>
                        </SubHeader>
                    </div>
                </div>
                <Footer />
            </Container>
        )
    }
}

export default Home;