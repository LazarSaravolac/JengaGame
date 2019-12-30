import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
export default class HomePage extends Component {

   

    render (){
    return(
        <React.Fragment>
            <ProductConsumer>
            {(value) => {
                        return (
                            <div className="py-5">
                            <div className="container">
                               
                                <div className="row">
                                    <div className="col-12  titlePowWow mx-auto">
                                         Welcome to  <span className="mx-3 powWowOnly"> POW POW</span> GAME NIGHT</div>
                                </div>
                                <div className="col-8 row col-lg-4 mx-auto">
                                    <img src="img/jenga.png" className="jenga" alt=""/>
                                </div>
                                <div className="col-12 mt-5 inputValue mx-auto">
                                        <input type="text" placeholder="ENTER NUMBER" onChange={(event) => value.changeInput(event.target.value)} />
                                       
                                    <div className="searchIcon" onClick={()=>console.log(value.getSearchedItem())}>
                                    <Link to="/quest">
                                                <i className="fa fa-search" style={{color:"white"}}></i>
                                        </Link>
                                        </div>
                                </div>
                                    <ButtonContainer className=" mt-5 mx-auto restartBtn" onClick={() => value.shuffle()}>Shuffle</ButtonContainer>
                                   
                        </div>
                        </div>   
                        )
                    }}
             </ProductConsumer>
           
        </React.Fragment>
    
)
}
}

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:#e31717;
color:#e31717;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    color:var(--mainWhite);
    background:#e31717;
}
&:focus{
    outline:none;
}
`
