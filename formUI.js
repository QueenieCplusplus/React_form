// 2020/7/10, PM3 :05-3:25
// 本腳本採受控元件，而非不受控元件，不受控元件建議使用 ref
// 受控元件表示元件狀態受 React 元件所控制，值存於 React 元件的狀態中。

var React = require("react");

var KsForm = React.createClass({

    getInitialState: function(){ //設定初始值

        return {val: "Poupous Worlds Query Form"};
    },

    func1: function(evForm){ // 處理器1

        alert(this.state.val);

    },

    func2: function(evInput){ //處理器2, value will update hereby

        this.setState({val: evInput.target.value});

    },
    // Ｈ5 元素註冊的屬性與方法和 React 元件物件的屬性方法一起指定在一起。
    render: function(){

        return <form onSubmit={this.func1}>
            <input
                type="text"
                value={this.state.val} // render value hereby
                onChange={this.func2}> 
            </input>
            <br/>
            <button type="submit">
                Click
            </button>
        </form>

    }

});


