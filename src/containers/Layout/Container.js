/**
 * Pure container component 
 */

import React, {PureComponent} from 'react';

class Container extends PureComponent{
    render(){
        return (
            <div className="row" style={styles.container}>
                <div className="col-xs-12"> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const styles = {
    container:{
        paddingLeft: 200, 
        paddingRight: 200,
        height: "100%",
    }
}


export default Container;