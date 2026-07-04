// let App = () => {
//   return (
//     <div>
//       <h1>My First React Component</h1>
//       <p>This is a simple React component using JSX.</p>
//     </div>
//   );
// }

import About from "./assets/About";

let App = () => {
  let a = '10 20 30';
  return (
    <div>
      <h1>jejd</h1>
     
      <About width="100%" name="John" num={a} /> 
     
    </div>
  );
}

export default App;