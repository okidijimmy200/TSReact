import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions'
// import { useDispatch } from 'react-redux'
// import { actionCreators } from '../state'

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.respositories)


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term)
    }
    return <>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </>
}

export default RepositoriesList