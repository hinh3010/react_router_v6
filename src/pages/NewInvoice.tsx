import React from 'react'
const NewInvoice = () => {
    return (
        <form>
            <label htmlFor="new-invoice"></label>
            <input type="text" name="new-invoice" id="new-invoice" />
            <input type="submit" value='mới' />
        </form>
    )
}

export default NewInvoice
