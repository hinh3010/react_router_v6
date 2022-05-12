import React from 'react'
import {invoices} from '../data/invoices'
import { Link,Outlet } from 'react-router-dom';

const Invoices = () => {
    return (
        <div>
            <h1>Invoices</h1>
            <Link to="new">New</Link>
            <div style={{display:'flex' }}>
                <nav style={{padding:'1rem',borderRight:"1px solid"}}>
                    {invoices.map((invoice,i)=>(
                        <Link key={i} to={`${invoice.id}`} 
                            style={{display:'block',margin:'1rem'}}>
                            {invoice.name}
                        </Link>
                    ))}
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}

export default Invoices
