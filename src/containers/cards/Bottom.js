import React, {PureComponent} from 'react';
import './Bottom.css';

class Bottom extends PureComponent{
    render(){
        return (
            <div className="bottom">
                <ImageIcon />
                <CoreInfo writer={"Gbenga"} time={"16 June 2017"}/>
                <BottomIcon />
            </div>
        )
    }
}

const ImageIcon = () => {
    return(
        <div className="imageIcon">

        </div>
    )
}

const CoreInfo = (props) => {
    return (
        <div className="coreInfo">
            <div className="writer-info">{props.writer}</div>
            <div className="writer-info">{props.time}</div>
        </div>
    )
}

const BottomIcon = () => {
    return (
        <div className="bottomIcon">
            <img src="/images/recommend.png" alt="recommend" />
        </div>   
    )
}

export default Bottom;