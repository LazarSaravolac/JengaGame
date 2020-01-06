import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import Rule from './Rule';
export default class Rules extends Component {
  render (){
  return(
    <React.Fragment>
    <div className="py-5">
        <div className="container">
            <div className="row  d-flex flex-column">
                 <ProductConsumer>
                    {(value) => {
                        return value.rules.map(rule => {
                          return <Rule key={rule.id} rule={rule}/>
                  
                            
                        })
                        
                    }}
                </ProductConsumer> 
            </div>
    </div>
    </div>   
</React.Fragment>
       )
  };
}