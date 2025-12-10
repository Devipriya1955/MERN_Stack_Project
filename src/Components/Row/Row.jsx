import { useState } from 'react'
import './Row.css'

function Row({ title, items, isLarge = false }) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleMovieClick = (item) => {
    setSelectedMovie(item)
  }

  const closeModal = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="row-container">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {items.map((item, i) => (
          <div key={i} className="poster-wrapper" onClick={() => handleMovieClick(item)}>
            <img
              className={`poster ${isLarge ? "poster-large" : ""}`}
              src={item.poster}
              alt={item.name}
            />
            <p className="poster-title">{item.name}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-modal" onClick={closeModal}>
          <div className="movie-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <img 
              src={selectedMovie.poster} 
              alt={selectedMovie.name}
              className="modal-poster"
            />
            <div className="modal-details">
              <h2>{selectedMovie.name}</h2>
              <p className="modal-description">{selectedMovie.description}</p>
              <div className="modal-buttons">
                <button className="play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play
                </button>
                <button className="add-list-btn">+ My List</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Row