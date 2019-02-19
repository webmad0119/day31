import React, { Component } from "react";
import "./css/toggableMenu.css"

export default class ToggableMenu extends Component {
    state = {
        open: false
    }

    clickHandler = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                <h1>Menu <button onClick={this.clickHandler}>close/open</button></h1>
                <ul className="menu" style={{"display": this.state.open ? "none" : "block"}}>
                    <li className="item item-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptate? Debitis quidem quibusdam ipsam explicabo nesciunt, quis voluptatum tempore quo minus cupiditate autem ratione quae aliquid deleniti amet quas atque.</li>
                    <li className="item item-2">Optio voluptatem alias, voluptates quo voluptas eligendi quis sint est possimus quod iusto porro sed aliquam eius necessitatibus cum, exercitationem vitae distinctio suscipit blanditiis, reiciendis libero ipsam. Fugiat, alias saepe!</li>
                    <li className="item item-3">Deleniti cumque, amet velit quibusdam, voluptatem doloremque porro ratione ipsum ipsam accusantium laboriosam. Aut voluptates nihil assumenda expedita laborum veritatis aspernatur totam, dicta pariatur deserunt atque voluptatem omnis doloribus odio.</li>
                    <li className="item item-4">Iste quaerat provident aliquid similique ea illum sit voluptas ipsa accusamus fuga corporis perferendis quo repellat architecto praesentium, nesciunt velit vel aspernatur est recusandae ut officiis qui esse? Ea, asperiores!</li>
                    <li className="item item-5">Enim ipsa molestias totam? Accusantium aperiam ipsum, omnis hic deleniti ad molestias consectetur voluptatibus asperiores error dolore amet reiciendis obcaecati deserunt culpa et voluptate expedita magnam recusandae ducimus exercitationem a.</li>
                </ul>
            </div>
        )
    }
}