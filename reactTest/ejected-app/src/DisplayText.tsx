import React, {useState, FC} from "react";

interface DisplayTextProps {
    getUserFullname: (username: string) =>
    Promise<string>;
}

const DisplayText: FC<DisplayTextProps> =
({ getUserFullname }) => {
    const [txt, setTxt] = useState('')
    const [msg, setMsg] = useState('')
    const [todos, setTodos] = useState<Array<JSX.Element>>();

    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value)
    }

    const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        setMsg(`Welcome to React testing, ${await getUserFullname(txt)}`)
        setUsersTodos()
    }
    const setUsersTodos = async () => {
        const userResponse = await fetch('http://jsonplaceholder.typicode.com/users');

        if(userResponse.ok) {
            const users = await userResponse.json();
            const userByName = users.find((usr: any) => {
                return usr.name.toLowerCase() === txt
            });
            console.log('user by username', userByName)

            const todosResponse = await fetch('http://jsonplaceholder.typicode.com/todos');

            if(todosResponse.ok) {
                const todos = await todosResponse.json();
                const usersTodos = todos.filter((todo: any) => {
                    return todo.userId === userByName.id;
                });
                const todoList = usersTodos.map((todo: any) => {
                    return <li key={todo.id}>
                        {todo.title}
                    </li>
                });
                setTodos(todoList);
                console.log('user todos', usersTodos)
            }
        }
    }

    

    return (
        <form>
            <div>
                <label>Enter your name</label>
            </div>
            <div>
                <input data-testid='user-input' value={txt} 
                onChange={onChangeTxt} />
            </div>
            <div>
                {/* . Note the
data-testid attributes to allow elements to be easily found by our tests later. */}
                <button data-testid='input-submit'
                onClick={onClickShowMsg}>Show Message</button>
            </div>
            <div>
                <label data-testid='final-msg'>{msg}</label>
            </div>
            <div>
                <ul style={{marginTop: '1rem', listStyleType: 'none'}}>
                    {todos}
                </ul>
            </div>
        </form>
    )
}

export default DisplayText