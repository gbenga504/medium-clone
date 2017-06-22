import React, {PureComponent} from 'react';
import Header from '../../containers/Header';
import {ContainerLayout} from '../../containers/Layout';
import SubHeader from './SubHeader';
import {MaterialCard} from '../../containers/cards';
import Linking from '../../containers/Linking';

class Admin extends PureComponent{
    render(){
        return (
            <div className="row" style={{height:"100%"}}>
                <div className="col-xs-12" style={{height:"100%"}}>
                    <Header color={"#fff"}/>
                    <SubHeader />
                    <ContainerLayout color="#F4F4EF">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6" style={{backgroundColor: "#F4F4EF"}}>
                                <Linking to="/news/5">
                                    <MaterialCard />
                                </Linking>
                                <Linking to="/news/5">
                                    <MaterialCard />
                                </Linking>
                            </div>
                        </div>
                    </ContainerLayout>
                </div>
            </div>  
        )
    }
}

export default Admin;