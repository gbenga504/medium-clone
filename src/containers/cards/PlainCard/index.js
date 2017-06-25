import React, {PureComponent} from 'react';
import './index.css';

class PlainCard extends PureComponent{
    render(){
        return(
            <div className="row">
                <div className="col-xs-12 plainCard">
                    <div className="row">
                        <div className="col-xs-12 cardTitle">{this.props.data.title}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="imageTagger">
                                <img src="" alt="tag image" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 cardBody">{this.props.data.body}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="recommend_btn">
                                <span className="recommended_tag">23 recommended</span> &nbsp; &nbsp; <img src="/images/recommend.png" alt="recommend" className="recommend_img"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlainCard;