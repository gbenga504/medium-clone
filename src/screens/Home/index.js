import React, {PureComponent} from 'react';
import {ContainerLayout} from '../../containers/Layout';
import Header from '../../containers/Header';
import {Headlines, TextRight, ButtonRight} from './Headlines';
import Section from './Section';
import {StaticFooter} from '../../containers/Footer';

class Home extends PureComponent{
    render(){
        return (
            <ContainerLayout color="#FBFCFD">
                <div className="row">
                    <div className="col-xs-12">
                        <Header color="#FBFCFD" />
                        <Headlines title="Latest News">
                            <TextRight title="More"/>
                        </Headlines>
                        <Section />
                        <Headlines title="Live Updates">
                            <ButtonRight title="More"/>
                        </Headlines>
                    </div>
                </div>
                <StaticFooter />
            </ContainerLayout>
        )
    }
}

export default Home;