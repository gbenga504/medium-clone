import React, {PureComponent} from 'react';
import Header from '../../containers/Header';
import Container from '../../containers/Layout/Container';
import SubHeader from './SubHeader';
import {PlainCard} from '../../containers/cards';

class Admin extends PureComponent{
    render(){
        return (
            <div className="row" style={{height:"100%"}}>
                <div className="col-xs-12" style={{height:"100%"}}>
                    <Header color={"#fff"}/>
                    <SubHeader />
                    <Container color="#F4F4EF">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <PlainCard />
                                <PlainCard />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>  
        )
    }
}

export default Admin;