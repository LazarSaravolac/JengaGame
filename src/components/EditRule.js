import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
export default class EditRule extends Component {
     render() {
         return (
            <ProductConsumer>
            {(value) => {
                        return (
                            <div className="container">
                            <div className="row">
                                 <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                                      <h1 className="display-3 mb-5">
                                         Edit rule
                                      </h1>
                                      <div className="questText mb-5">{value.ruleToEdit.ruleTitle}</div>  
                                      <div>
                                        <textarea  rows="5" cols="50"  onInput={(event)=>{value.changeEditRule(event.target.value)}} className="mb-5" value={value.ela} />
                                      </div>
                                        <Link to="/rules">
                                      <ButtonContainer cart style={{fontSize:"30px"}}>Back</ButtonContainer>
                                        </Link>
                                        <Link to="/rules">
                                      <ButtonContainer onClick={()=>value.saveEditRule(value.ruleToEdit.id)} style={{fontSize:"30px"}}>Save</ButtonContainer>
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