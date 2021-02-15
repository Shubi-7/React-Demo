import React from 'react'

function Form() {
    return (
        <div>
            <form>
               Name: <input type = "text" name = "textbox"/> <br/>
               Pass: <input type = "password" name = "pass"/>

               <button>Sumbit</button>
            </form>
        </div>
    )
}

export default Form
