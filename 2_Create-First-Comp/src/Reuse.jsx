function Comp()
{
    let num = Math.random() * 10 + 1; 
    return <h2>the random number is {Math.round(num)}</h2>
}

export default Comp;