import React from 'react';

// props thw child is expected to receive
interface ChildProps  {
    color: string;
    onclick: () => void;
    children: React.ReactNode;
}

export const Child = ({color, onclick}: ChildProps) => {
    return <div>
        {color}
        <button onClick={onclick}>Click Me</button>
        </div>
}

// FC is FunctionComponent
// this shows TS this is a react component with other attributes like context types
export const ChildAsFC: React.FC<ChildProps> = ({color, onclick, children}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onclick}>Click Me</button>
        </div>
    )
}

ChildAsFC.displayName