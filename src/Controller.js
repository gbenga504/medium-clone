import React, { Component } from 'react';

class Controller extends Component{
    render(){
      return (
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
      )
    }
}

export default Controller;
