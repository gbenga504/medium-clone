import React, {PureComponent} from 'react';
import {ContainerLayout} from '../../containers/Layout';
import Header from './Header';
import AuthenticationForm from './AuthenticationForm';

class Authentication extends PureComponent{
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <Header/>
                    <ContainerLayout color="#FBFCFD">
                        <div className="row">
                            <div className="col-xs-12">
                                <AuthenticationForm />
                            </div>
                        </div>
                    </ContainerLayout>
                </div>
            </div>
        )
    }
}

export default Authentication;