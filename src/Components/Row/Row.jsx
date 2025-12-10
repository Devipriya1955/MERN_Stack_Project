import './Row.css'

function Row({ title, items, isLarge = false }) {
  return (
    <div className="row-container">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {items.map((item, i) => (
          <div key={i} className="poster-wrapper">
            <img
              className={`poster ${isLarge ? "poster-large" : ""}`}
              src={item.poster}
              alt={item.name}
            />
            <p className="poster-title">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row