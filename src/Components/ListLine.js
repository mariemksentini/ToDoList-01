import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

class Line extends React.Component {
    render() {
        const { task, onDelete, onCheck } = this.props;

        const styleBox = {
            width: '500px',
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            border: task.isChecked ?  '#4B0101 solid 2px' :'black solid 2px',
            borderRadius: '20px',
            margin: '5px',
        };

        const iconStyle = {
            padding: '5px',
            fontSize: '25px',
            color : task.isChecked ? '#4B0101' : 'black'
        };

        const styleText = {
            fontSize: '25px',
            fontFamily: 'Brush Script MT, cursive',
            textDecoration: task.isChecked ? 'line-through' : 'none',
            color : task.isChecked ? '#4B0101' : 'black'
        };

        return (
            <div style={styleBox}>
                <p style={styleText}>{task.value}</p>
                <div>
                    <FontAwesomeIcon
                        onClick={onCheck}
                        style={iconStyle}
                        icon={task.isChecked ? faXmark : faCheck}
                    />
                    <FontAwesomeIcon onClick={onDelete} style={iconStyle} icon={faTrash} />
                </div>
            </div>
        );
    }
}

export default Line;
