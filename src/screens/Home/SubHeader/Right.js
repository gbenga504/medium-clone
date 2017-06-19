import React, {PureComponent} from 'react';

class TextRight extends PureComponent{
    render(){
        return (
            <div className="row" style={Textstyles.title}>
                <div style={Textstyles.rightPositioner}>
                    <div style={Textstyles.rightPositionerMarker}>
                        {this.props.title} &nbsp; <img src="/images/back.png" alt="backButton" style={Textstyles.backImage} />
                    </div>
                </div>
            </div>
        )
    }
}

const Textstyles = {
    title:{
        fontSize: 14,
        fontFamily: 'Raleway',
        marginTop: 35,
    },
    rightPositioner:{
        right: 0,
        width: "100%",
        position: "absolute",
    },
    rightPositionerMarker:{
        right: 0,
        position: "absolute",
    },
    backImage:{
        width: 20,
        height: 20,
    },
}

class ButtonRight extends PureComponent{
    render(){
        return (
            <div className="row">

            </div>
        )
    }
}



export {TextRight, ButtonRight};