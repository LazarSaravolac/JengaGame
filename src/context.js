import React, { Component } from 'react';
import { rules} from './data';
const ProductContext = React.createContext();


class ProductProvider extends Component {

    state = {
      rules: rules,
      inputValue: 0,
      quest: { ruleTitle: "" },
      ruleToEdit: { ruleTitle: "" },
      inputEditValue: "",
      addNewRuleValue:""
    }

    getRule = (id) => {
      const rule = this.state.rules.find(rule => rule.id === id);
      return rule;
  }

  addNewRuleValue = (value) => {
    this.setState(() => {
      return { addNewRuleValue: value};
    })
  }

  submitNewRule = () => {
    const id = parseInt(Math.random() * 1000);
    let newRule = { ruleTitle: this.state.addNewRuleValue, id: id };
    let tempRules=[...this.state.rules];
    tempRules=tempRules.concat(newRule);
    this.setState(() => {
      return { rules: tempRules};
    })
    
  }

  removeRule = (id) => {
    
    let filterRules = [...this.state.rules];
    
    filterRules = filterRules.filter(rule =>  rule.id !== id );
    console.log(filterRules);
    this.setState(() => {
      return { rules: filterRules };
    },()=>{

      console.log(this.state.rules);
    })
  }

  editRule = (id) => {

    if(this.getRule(id)){
      let rule = this.getRule(id).ruleTitle;
      this.setState(() => {
        return { ruleToEdit: this.getRule(id),inputEditValue:rule };
      })
    } else {
      this.setState(() => {
        return { ruleToEdit: {ruleTitle:"empty"}};
      })
    }
  }

  saveEditRule = (id) => {
    let savedEditRule = this.getRule(id);
    let index = this.state.rules.indexOf(savedEditRule);
    let copyRules = [...this.state.rules];
    copyRules[index].ruleTitle = this.state.inputEditValue;
    this.setState(() => {
      return { rules: copyRules};
    })
  
  }

  getSearchedItem = () => {
    if(this.getRule(parseInt(this.state.inputValue))){

      this.setState(() => {
        return { quest: this.getRule(parseInt(this.state.inputValue)) };
      })
    } else {
      this.setState(() => {
        return { quest: {ruleTitle:"empty"} };
      })
    }
  
    return this.getRule(parseInt(this.state.inputValue));
  }
cloneRules = () => {
  let products = [];
  rules.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
  })
      return products
}

  shuffle = () => {
let N = 54;
var niz=[];


for(let i=0; i < N; i++)
niz[i] = i;

const pravila=this.cloneRules();

for(let i=0; i <pravila.length; i++) {
let randIndex =  parseInt((Math.random() * N));
let tmp = niz[i];
niz[i] = niz[randIndex];
niz[randIndex] = tmp;
    }

    for (let i = 0; i < pravila.length; i++){
      pravila[i].id = niz[i];
    }

    this.setState(()=>{
      return {rules:pravila}
    },()=>{
      console.log(this.state.rules);
    })
    
   
    
    
}

changeEditRule  = (value) => {
  this.setState(()=>{
    return {inputEditValue:value}
  },()=>{
    console.log(this.state.inputEditValue)
  })
}

  changeInput = (value) => {
    this.setState(()=>{
      return {inputValue:value}
    })
    
  }
 
  render (){
  return(
      <ProductContext.Provider value={{
      ...this.state,
      getRule: this.getRule,
      changeRuleTitle: this.changeRuleTitle,
      shuffle:this.shuffle,
      changeInput:this.changeInput,
      getSearchedItem: this.getSearchedItem,
      removeRule:this.removeRule,
      editRule:this.editRule,
      inputEditValue:this.inputEditValue,
      saveEditRule:this.saveEditRule,
      changeEditRule:this.changeEditRule,
      ela:this.state.inputEditValue,
      addNewRuleValue:this.addNewRuleValue,
      submitNewRule:this.submitNewRule
      }}>
      {this.props.children}    
     </ProductContext.Provider>
       )
  };
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };