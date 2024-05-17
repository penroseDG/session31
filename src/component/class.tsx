import React, { Component } from 'react'
interface Props{
}
interface State{
    name:string;
    age:number;
    loading: boolean;

}
export default class classComponent extends Component<Props,State> {
    constructor(props:Props){
    super(props);
    this.state={
        name:"hoa",
        age:25,
        loading:true,
    }
}
componentDidMount(): void {
    console.log("chạy sau khi component được render lần đâu");
    
}
// các phương thức mặc định React cung cấp
componentWillUnmount(): void {
    console.log("chạy sau khi constructor khởi tạo xong giá trị state!");
    /*
        trong phương thức componentWilMount có thể tính toán lại state nhưng
        lưu ý thời gian chuyển từ phương thức componentWillMount đến phương thức render
        rất nhanh cho nên lưu ý việc cập nhật state
    */
}
render(){
    /*
    this.setState({
        name:"hùng"
    })
    */
  return ( 
    <div>
        <p>ClassComponent</p>
    <p> xin chào {this.state.name}</p></div>
    
  )
}
}