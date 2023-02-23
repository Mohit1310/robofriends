import React from 'react'

// const Card = (props) => {
//     const {name, email, id} = props // destructuring type-1
const Card = ({ name, email, id}) => { // destructuring type-2
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card