import React from 'react';

function App(){

  let counter = 0;
  const sayHello = () =>{
    counter++;
  }

 

  return(
    <div>
      <h1>Hello React</h1>
      <button onClick = {sayHello()}>
        {counter}
      </button>
    </div>


  );
}

export default App;