import React from 'react'

const Smiley = props => {
  let faceType = null

  switch (props.rating) {
    case 1 : faceType = 'fa-angry'
    break
    case 2 : faceType = 'fa-frown'
    break
    case 3 : faceType = 'fa-meh'
    break
    case 4 : faceType = 'fa-smile'
    break
    case 5 : faceType = 'fa-laugh'
  }

  return (
    <i className={"far " + faceType + " fa-3x smileyFace"}></i>
  )
}
 
export default Smiley