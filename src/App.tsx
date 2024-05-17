import Class from "./component/class";
import B1 from "./component/b1";
import B2 from "./component/b2";
import B3 from "./component/b3";
import B4 from "./component/b4";
import B5 from "./component/b5";
import B6 from "./component/b6";
import B7 from "./component/b7";
export default function App() {
  return (
    <div> App 
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5 isOpen={false}></B5>
      <B6></B6>
      <B7></B7>
   </div>
  );
}   
