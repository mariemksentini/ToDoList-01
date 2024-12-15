import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        };
    }

    handleAddTask = () => {
        this.props.onAdd(this.state.task)
        // console.log(this.props)
        this.setState({ task: '' })
    };

    render() {
        const styleBox = {
            width: '500px',
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            border: 'grey solid 2px',
            borderRadius: '20px',
            margin: '50px',
        };

        const iconStyle = {
            padding: '5px',
            fontSize: '25px',
        };

        const styleInput = {
            border: 'grey 0px',
            fontSize: '25px',
            width: '480px',
            height: '50px',
            borderRadius: '17px',
            fontFamily: 'Brush Script MT, cursive',
            

        };

        return (
            <div style={styleBox}>
                <input
                    style={styleInput}
                    type="text"
                    value={this.state.task}
                    onChange={(e) => this.setState({ task: e.target.value })}
                    placeholder="Enter a new task"
                />
                {/* {console.log(this.state.task)} */}
                <div>
                    <FontAwesomeIcon
                        onClick={this.handleAddTask}
                        style={iconStyle}
                        icon={faArrowUp}
                    />
                </div>
            </div>
        );
    }
}

export default AddTask;
