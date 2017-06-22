import React, {PureComponent} from 'react';
import Header from '../../containers/Header';
import {ContainerLayout} from '../../containers/Layout';
import SubHeader from './SubHeader';
import {MaterialCard} from '../../containers/cards';

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
                                <MaterialCard />
                                <MaterialCard />
                            </div>
                        </div>
                    </ContainerLayout>
                </div>
            </div>  
        )
    }
}

export default Admin;