import React, {PureComponent} from 'react';

class TextRight extends PureComponent{
    render(){
        return (
            <div className="row" style={Textstyles.title}>
                <div style={Textstyles.rightPositioner}>
                    <div style={Textstyles.rightPositionerMarker}>
                        {this.props.title} &nbsp; <img src="/images/forward.png" alt="backButton" style={Textstyles.backImage} />
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
    rightButton:{
        right: 0,
        width: "100px",
        borderRadius: "10px",
        position: "absolute",
        textAlign: "center",
        border: "1px solid #2196f3",
        color: "#2196f3",
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
            <div className="row" style={Textstyles.title}>
                <div style={Textstyles.rightPositioner}>
                    <div style={Textstyles.rightButton}>
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    }
}



export {TextRight, ButtonRight};