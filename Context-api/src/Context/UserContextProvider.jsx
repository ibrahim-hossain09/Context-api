import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const UserContextProvider = ({Children}) => {

    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
        {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;