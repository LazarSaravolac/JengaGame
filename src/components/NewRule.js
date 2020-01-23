import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
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
                                        Create new rule
                                      </h1>
                                      <div>
                                        <textarea  rows="5" cols="50"  onInput={(event)=>{value.addNewRuleValue(event.target.value)}} />
                                        </div>
                                      <Link to="/rules">
                                        <ButtonContainer className="mt-5" onClick={()=>value.submitNewRule()}>Add new rule</ButtonContainer>
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


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props => props.cart ? "red" : "var(--powPowGreen)"};
color:${props => props.cart ? "red" : "var(--powPowGreen)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    color:var(--mainWhite);
    background:${props => props.cart ? "red" : "var(--powPowGreen)"};
}
&:focus{
    outline:none;
}
`