import React from 'react'

const Items = ({game_name,discriptions,src,price,stare}) => {
  return (
    <div className="item_container">
      <div className="single_item">
        <img className='item-photo' src={src} alt="items" />
        <div>
          <h3>{game_name}</h3>
          <p>{discriptions}</p>
          <button className="btn">Buy now</button>
        </div>
      </div>
      <div className="extra_details">
        <h3>Price <sup>$</sup><span style={{color:'green'}}>{price}</span></h3><br />
        <div>
          <h4>More details</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolor
            nulla earum cumque necessitatibus soluta ullam deleniti veritatis
            doloribus obcaecati! Minus harum vero atque molestias eaque
            deleniti, cupiditate cumque error.
          </p>
        </div>
        <div>
          <h4>Review</h4>
          <p>{stare}</p>
        </div>
      </div>
    </div>
  );
}

export default Items