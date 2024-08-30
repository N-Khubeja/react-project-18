import { useState } from "react"


const Users = ({forpost}) => {
    const [first,setfirst] = useState()
    const [last,setlast] = useState()

    const submit = (e) => {
        e.preventDefault()

        forpost(first,last)

    }


    return(
        <form className="form" onSubmit={submit}>
            <input type="text" placeholder="firstname"  onChange={(e) => setfirst(e.target.value)}/>
            <input type="text" placeholder="lastname" onChange={(e) => setlast(e.target.value)}/>
            <button type="submit">submit</button>
        </form>

    )
}

export default Users