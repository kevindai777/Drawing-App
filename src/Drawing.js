import React from 'react'
import DrawingLine from './DrawingLine.js'

class Drawing extends React.Component {
    render() {
        return (
            <svg className="drawing">
                {this.props.lines.size > 0 ? this.props.lines.map((line, index) => (
                    <DrawingLine key={index} line={line}/>)) : null} />
            </svg>
        )
    }
}

export default Drawing;