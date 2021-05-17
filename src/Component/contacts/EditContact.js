import React, { Component } from 'react';
import InputGroup from '../helpers/InputGroup';
import {Consumer} from '../Context';
import axios from 'axios';

export default class EditContact extends Component 
{

    state = {
        name: "",
        phone: "",
        email: "",
        id: 0,
        errors: {}
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            this.setState({
                name: res.data.name,
                phone: res.data.phone,
                email: res.data.email,
                id: res.data.id
            })
        }catch(e)
        {
            console.error(e)
        }
    }

    onChangeInput = (e) =>
    {
        this.setState({[e.target.name]: e.target.value})
    }

    submit = async(dispatch,saize,e)=>
    {
        
        e.preventDefault();
        const {email,phone,name} = this.state;

        if(name === "")
        {
            this.setState({errors: {name: "name is required !"}});
            return;
        }
        if(phone === "")
        {
            this.setState({errors: {phone: "phone is required !"}});
            return;
        }
        if(email === "")
        {
            this.setState({errors: {email: "email is required !"}});
            return
        }
        const upDateContact = {
            name,
            email,
            phone
        }

        try
        {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,upDateContact)
            dispatch({
                type: "UPDATE_CONTACT",
                paylod: res.data});
                this.props.history.push("/");

        }catch(e){console.log(e)}
        
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        })
    }
    render() 
    {
        const {name,email,phone,errors} = this.state;
        return(
            <Consumer>
                {value =>
                    (
                        <div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edit Contact</h4>
                                <div className="card-text">
                                <form onSubmit = {this.submit.bind(this,value.dispatch,value.listeContacts.length)}>
                                    <InputGroup
                                        name = "name"
                                        label = "Name"
                                        value = {name}
                                        type = "text"
                                        onChange = {this.onChangeInput} 
                                        errors = {errors.name}
                                    />
        
                                    <InputGroup
                                        name = "phone"
                                        label = "Tel"
                                        type = "text"
                                        value = {phone}
                                        onChange = {this.onChangeInput}
                                        errors = {errors.phone}
                                    />
        
                                    <InputGroup
                                        name = "email"
                                        label = "Email"
                                        type = "email"
                                        value = {email}
                                        onChange = {this.onChangeInput}
                                        errors = {errors.email}
                                    />

                                    <button type="submit" className="btn btn-danger btn-block">Update Contact</button> 
                                </form>    
                                                      
                            </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </Consumer>
        )
    }
}
