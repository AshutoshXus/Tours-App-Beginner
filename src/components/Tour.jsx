import { useState } from 'react'

function Tour({ tour, removeTour }) {
  const { id, name, info, image, price } = tour
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour ">
      <img src={image} className="img" />
      <span className="tour-price">$ {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {`${info.substring(0, readMore ? info.length : 200)}...`}

          <button
            className="info-btn"
            onClick={() => {
              setReadMore(!readMore)
            }}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button
          className="info-btn delete-btn btn-block"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  )
}
export default Tour
