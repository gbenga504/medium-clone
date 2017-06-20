import React, {PureComponent} from 'react';
import PostBox from '../../../containers/PostBox';
import './index.css';

class Form extends PureComponent{
    render(){
        return (
            <div className="row form">
                <div className="col-xs-12">
                    <TitleBox />
                    <PostBox />
                </div>
            </div>
        )
    }
}

const TitleBox = () => {
    return (
        <div className="row titleBox">
            <input type="text" placeholder="Enter a title" id="titleInput"/>
        </div>
    )
}


export default Form;