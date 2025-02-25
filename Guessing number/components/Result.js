
function Result(props) {
    let result;
    const { term, secnum } =props
    if(term)
    {
        if(term<secnum)
        {
            result="Lower"
        }else if(term>secnum){
            result="Higher"
        }else if(term==secnum){
            result="Hey Congrats! You won !!!!!"
        }else{
            result="Enter valid input"
        }
    }

    return <>
              <h2> You guessed : {result}</h2>
           </>
}
export default Result;