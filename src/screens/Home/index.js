import React, {PureComponent} from 'react';
import {ContainerLayout} from '../../containers/Layout';
import Header from '../../containers/Header';
import {Headlines, TextRight, ButtonRight} from './Headlines';
import Section from './Section';
import {StaticFooter} from '../../containers/Footer';

class Home extends PureComponent{
    constructor(props){
        super(props);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        //send fetch request to get the info from the database
    }


    loadMore(){
        //load More info based on state change and update 
    }


    render(){
        return (
            <ContainerLayout color="#FBFCFD">
                <div className="row">
                    <div className="col-xs-12">
                        <Header color="#FBFCFD" />
                        <Headlines title="Latest News">
                            <TextRight title="More" onClick={this.loadMore}/>
                        </Headlines>
                        <Section />
                        <Headlines title="Upcoming Events">
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