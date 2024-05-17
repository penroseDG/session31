import React, { Component } from 'react';
interface Props {

}
interface State {
    text: string;
}
class ToggleText extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // Khởi tạo state với giá trị ban đầu
        this.state = {
            text: 'rikkei company'
        };
        // Bind sự kiện để đảm bảo 'this' trong hàm handleClick trỏ đến component
        this.handleClick = this.handleClick.bind(this);
    }

    // Phương thức để xử lý sự kiện click
    handleClick() {
        this.setState({
            text: this.state.text === 'rikkei company' ? 'ducvip no 1' : 'rikkei company'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}> thay đổi nào magic</button>
            </div>
        );
    }
}

export default ToggleText;
