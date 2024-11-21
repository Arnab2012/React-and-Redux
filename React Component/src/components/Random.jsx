function Random(){
    let num=Math.random()*100;
    return <p style={{backgroundColor:'red'}}>The Random Number is : {Math.round(num)}</p>
}
export default Random;