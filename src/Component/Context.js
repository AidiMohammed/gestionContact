import React, { Component } from 'react';
import axios from 'axios';

const context = React.createContext();

const reducer = (state,action) =>
{
    /*
        Actions:
            Add Contact
            delet Conatct
            update Contact 
    */ 
   switch (action.type) {
        case "DELET_CONTACT":
            return {listeContacts: state.listeContacts.filter(contact => contact.id !== action.paylod)}
           break;
        case "ADD_CONTACT":
               return {listeContacts: [...state.listeContacts,action.paylod]}
           break;
        case "UPDATE_CONTACT":
            return {listeContacts: state.listeContacts.map(contact => (contact.id === action.paylod.id) ? contact = action.paylod : contact)}
        default:
           break;
   }
}

export class Provider extends Component 
{
    state = {
        listeContacts: [],
        dispatch : action => this.setState(state => reducer(state ,action))
    }
    async componentDidMount()
    {
        try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({listeContacts: res.data});            
        }catch(e){console.log(e)}

    }
    render() {
        return (
            <context.Provider value ={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export const Consumer = context.Consumer;
