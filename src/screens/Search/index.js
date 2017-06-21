import React, {PureComponent} from 'react';
import {ContainerLayout} from '../../containers/Layout';
import Header from '../../containers/Header';
import SearchInput from './SearchInput';
import Result from './Result';

class Search extends PureComponent{
    render(){
        return (
            <div className="row">
            	<div className="col-xs-12">
                    <Header color="#fff"/>
                    <ContainerLayout color="#fff">
                        <div className="row">
                            <div className="col-xs-12">
                                <SearchInput />
                                <Result />
                            </div>
                        </div>
                    </ContainerLayout>
                </div>
            </div>
        )
    }
}

export default Search;