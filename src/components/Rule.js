import React, {Component} from 'react';
import {ButtonContainer} from './Button';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
export default class Rule extends Component {

    render (){
        const { id,ruleTitle } = this.props.rule;
  return(
      <React.Fragment>
           <ProductConsumer>
                    {(value) => {
                        return (
                            <div className="oneRule mt-3 mx-auto">
                                <span className="s">{ruleTitle}</span>
                                <span>
                                    <Link to="/editRule">
                                <ButtonContainer className="ml-3" onClick={()=>{value.editRule(id)}}><i className="fas fa-plus"></i></ButtonContainer>
                                    </Link>
                                <ButtonContainer onClick={()=>value.removeRule(id)} cart><i className="fas fa-minus"></i></ButtonContainer>
                                </span>
                            </div>
                        )
                    }}
               
                        </ProductConsumer>
       
    </React.Fragment>
       )
  };
}
