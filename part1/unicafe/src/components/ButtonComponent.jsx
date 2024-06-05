
const Button = ({state, setState, text}) =>{
    return (
        <>
            <button onClick={()=> setState(state+1)}>{text}</button>
        </>
    )
};

export default Button;