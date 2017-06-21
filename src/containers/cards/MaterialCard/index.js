import React, {PureComponent} from 'react';
import './index.css';

class MaterialCard extends PureComponent{
    render(){
        return (
            <div className="row materialCard">
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12 adminPostTitle">Beginning Node in 2016</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 post_image">
                            <img src="" alt="new post image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 post_message_holder">
                            <span className="post_message">NodeJs emerged has one of the most prominent programming languages in Nigeria ...</span>
                        </div>
                    </div>
                    <div className="row" style={{height:"30px"}}>
                        <div className="col-xs-12">
                            <div className="recommend_btn">
                                <span className="recommended_tag">23 recommended</span> &nbsp; &nbsp; <img src="/images/recommend.png" alt="recommend" className="recommend_img"/> 
                            </div>
                            <div className="admin_core_btn">
                                <img src="" alt="edit_btn" className="core_btn"/> &nbsp; &nbsp; &nbsp; <img src="" alt="delete_btn" className="core_btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MaterialCard;