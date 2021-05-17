import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h3>Page Not Found 404</h3>
            <Link rel="stylesheet" to="/">Back To Home Page</Link>
        </div>
    )
}
