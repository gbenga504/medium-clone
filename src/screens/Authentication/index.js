import React, {PureComponent} from 'react';
import {Container} from '../../containers/Layout';
import Header from './Header';
import AuthenticationForm from './AuthenticationForm';

class Authentication extends PureComponent{
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <Header/>
                    <Container color="#FBFCFD">
                        <div className="row">
                            <div className="col-xs-12">
                                <AuthenticationForm />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Authentication;