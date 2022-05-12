import React from 'react'
import {useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { invoices } from './../data/invoices';
const Invoice = () => {
    const params = useParams<{invoiceId : string}>()
    const navigate = useNavigate()
    const invoice = invoices.find(invoice => invoice.id.toString()===params.invoiceId)
    useEffect(() => {
        if(!invoice) navigate('..')
    }, [invoice])
    return (
        <div>
            <h2 style={{padding:'1rem'}}>
                {/* {invoice 
                    ? `invoice #${invoice ?.id} for ${invoice?.name}`
                    : `No invoice => failed`
                } */}
                invoice #{invoice ?.id} for {invoice?.name}
            </h2>
        </div>
    )
}

export default Invoice
