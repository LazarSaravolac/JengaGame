import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
export default class Quest extends Component {
     render() {
         return (
            <ProductConsumer>
            {(value) => {
                        return (
                            <div className="container">
                            <div className="row">
                                 <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                                      <h1 className="display-3 mb-5">
                                         Quest
                                      </h1>
                                      <div className="questText mb-5">{value.quest.ruleTitle}</div>
                                        <Link to="/">
                                      <ButtonContainer>Acomplished</ButtonContainer>
                                        </Link>
                                 </div>
                            </div>
                     </div>
                        )
                    }}
             </ProductConsumer>
       )
  };
}