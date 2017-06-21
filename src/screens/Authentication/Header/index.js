import React, {PureComponent} from 'react';
import {HeaderLayout} from '../../../containers/Layout';
import './index.css';

class Header extends PureComponent{
    render(){
        return (
            <HeaderLayout border={true} color={"fff"}>
                <div className="col-xs-offset-4 col-xs-4 text-center">
                    <img src="" alt="logo image for the web application" />
                </div>
            </HeaderLayout>
        )
    }
}

export default Header;