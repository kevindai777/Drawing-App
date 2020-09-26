import React from 'react'

function DrawingLine({ line }) {
    const pathData = "M " +
      line.map(point => {
          console.log(point.get('x'), point.get('y'))
          return `${point.get('x')} ${point.get('y')}`
       }).join(" L ")
  
    return <path className="path" d={pathData} />
}

export default DrawingLine