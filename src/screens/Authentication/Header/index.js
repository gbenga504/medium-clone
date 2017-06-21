import React, {PureComponent} from 'react';
import HeaderContainer from '../../../containers/HeaderContainer';
import './index.css';

class Header extends PureComponent{
    render(){
        return (
            <HeaderContainer border={true} color={"fff"}>
                <div className="col-xs-offset-4 col-xs-4 text-center">
                    <img src="" alt="logo image for the web application" />
                </div>
            </HeaderContainer>
        )
    }
}

export default Header;