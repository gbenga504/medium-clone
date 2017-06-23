import React, {PureComponent} from 'react';
import Bottom from './Bottom';
import './index.css';


class FlatCard extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="col-sm-6 col-xs-12" style={{marginBottom: "20px"}}>
                <div className="col-xs-12">
                    <div className="row" id="card">
                        <div className="col-xs-4" id="newsDisplayHolder">
                            <img src={`${this.props.data.postImage}`} height="100%" width="100%" />
                        </div>
                        <div className="col-xs-8" id="content">
                            <div className="col-xs-12 title">{this.props.data.title}</div>
                            <div className="col-xs-12 body">{`${this.props.data.body}...read more`}</div>
                            <Bottom writer={this.props.data.User.firstName} timePosted={this.props.data.updated_at} userProfilePics={this.props.data.User.userProfilePic} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlatCard;