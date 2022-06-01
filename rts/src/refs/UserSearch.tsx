import { useState, useRef, useEffect } from 'react'

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age:20},
    {name: 'Micheal',age: 20}
]

const UserSearch: React.FC = () => {
    // ref could point to null or an html element
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>() // assign two types of values to user

    useEffect(() => {
        if (!inputRef.current){
            return;
        }
        inputRef.current.focus();
    }, [])

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })
       setUser(foundUser)
    }
    

    return <div
    >User Search
    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
        {user?.name}
        {user?.age}
    </div>
    </div>
}

export default UserSearch;