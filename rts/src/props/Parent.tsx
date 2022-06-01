import { ChildAsFC } from './Child'

const Parent = () => {
    return (
        <ChildAsFC color='red' onclick={() => console.log('clicked')}>
        test
    </ChildAsFC>
    );
};

export default Parent

