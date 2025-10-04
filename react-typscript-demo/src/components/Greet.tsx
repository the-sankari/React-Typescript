type GreetProps ={
    name: string;
    age?: number; // optional prop
}

const Greet = (props: GreetProps,) => {
  return (
    <div>
      <h2>Hello {props.name}, welcome to the React + TypeScript + Vite app!</h2>
      {props.age && <p>Your age is {props.age}.</p>}
    </div>
  )
}




export default Greet;
