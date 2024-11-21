function Dynamic() {
  let name = "Arnab Basak";
  let coursename=()=>{
    return "React"
  }
  return <h1>My name is {name}, and this is {coursename()} course</h1>;
}
export default Dynamic;
