import React, { Component } from 'react';
import {Consumer} from '../Context';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
class Contact extends Component 
{
    state = {showContact: false}

    ToggleShowContact = () =>
    {
        this.setState({showContact: !this.state.showContact})
    }

    async deletContact(dispatch,id)
    {
        try
        {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)      
            dispatch({
                type: "DELET_CONTACT",
                paylod: id
            })                  
        }catch(e){console.long(e)}
    }

    updateContacte(dispatch,id)
    {
        
    }

    render() 
    {
        const {name,email,phone,id} = this.props.data;
        
        return (
            <Consumer>
            {
            value =>  
                (<div className="card">  
                <div className="card-body">
                    <h4 className="card-title">
                        Name : {name} 
                        {(this.state.showContact) ?
                             <i 
                                style={{marginLeft: 10 , cursor: "pointer"}} 
                                className="fa fa-sort-up"
                                            onClick= {this.ToggleShowContact}
                            />
                            :
                            <i 
                                 style={{marginLeft: 10 , cursor: "pointer"}} 
                                 className="fa fa-sort-down"
                                 onClick= {this.ToggleShowContact}
                             />
                            }
                         <div style = {{float: "right",marginRight: '5px'}}>
                         <button onClick={this.deletContact.bind(this,value.dispatch,id)} type="button" className="btn btn-danger">Supprimer</button>
                        <Link to={`/contact/edit/${id}`}><button onClick={this.updateContacte.bind(this,value.dispatch,id)} type="button" className="btn btn-primary">Modifer</button></Link>
                        </div>
                     </h4>
                    {(this.state.showContact) ?
                         <ul className="list-group">
                             <li className="list-group-item">Tel : {phone}</li>
                             <li className="list-group-item">Email : {email}</li>
                        </ul>
                        :
                        null                        
                     }
                </div>
                </div>
            )}
            </Consumer>
        )}
}

export default Contact