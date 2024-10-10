import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

    const [currentUser, setCurrentUser] = useState(() => {
        // Initialize state with localStorage value, or null if not found
        return JSON.parse(localStorage.getItem('user')) || null;
    });


    useState(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>
}

export default UserProvider;
