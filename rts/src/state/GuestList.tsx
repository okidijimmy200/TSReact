import { useState } from 'react'

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]) // gurst is an array of strings

    const onClick = () => {
        setName('');
        // spread operator shows previous guest and adds name to the end
        setGuests([...guests, name])
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
        </div>;
}

export default GuestList