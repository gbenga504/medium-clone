import React, {PureComponent} from 'react';
import {Container} from '../../containers/Layout';
import Header from '../../containers/Header';
import SearchInput from './SearchInput';

class Search extends PureComponent{
    render(){
        return (
            <div className="row">
            	<div className="col-xs-12">
                    <Header />
                    <Container color="#fff">
                        <div className="row">
                            <div className="col-xs-12">
                                <SearchInput />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Search;