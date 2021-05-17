import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import Contact from '../contacts/Contact'
import {Consumer} from '../Context'

class Navbar extends Component 
{
    state = 
    {
        stringSearch: "",
        contactesFind: [] 
    }

    ChangeInputSerach = (listeContacts,e)=>
    {
        this.setState({stringSearch: e.target.value})
        this.setState({contactesFind: []})
        console.log("(1)", this.state.contactesFind)

        listeContacts.map(contact => 
        {
            const nameUpperCase = contact.name.toUpperCase();
            const stringSearchUpperCase = this.state.stringSearch.toUpperCase();

            console.log(String(nameUpperCase).search(stringSearchUpperCase));
            if(String(nameUpperCase).search(stringSearchUpperCase) != -1)
            {
                this.setState({contactesFind: [...this.state.contactesFind,contact]})
            }
                
        })
        console.log("(2)",this.state.contactesFind)
    }

    render()
    {
    return (
        <Consumer>
            {value =>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#">{this.props.title}</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact/add">Add Contact</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input value = {this.state.stringSearch} onChange = {this.ChangeInputSerach.bind(this,value.listeContacts)} className="form-control me-2" type="search" placeholder="Search Contacts" aria-label="Search"/>
                    </form>
            </nav>            
            }
        </Consumer>)
    }
}

export default Navbar