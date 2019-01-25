import React, {Component} from 'react'

class TodoInput extends Component{

    clickHandle = () => {
        console.log("click to do input handle...")
        const input = this.input
        console.log(input.value)

        this.props.add(input.value)
        input.value=''


    }

    render() {
        return(
            <div>
                <small>Todo Input</small>
                <input type='text' ref={(ref) => this.input = ref}></input>
                <button onClick={this.clickHandle}>ADD</button>
            </div>
        )
    }
}
export default TodoInput