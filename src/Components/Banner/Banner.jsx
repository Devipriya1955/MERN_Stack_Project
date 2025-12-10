import './Banner.css'

function Banner() {
  const handlePlay = () => {
    console.log('Play clicked')
    // Add your play functionality here
  }

  const handleMoreInfo = () => {
    console.log('More Info clicked')
    // Add your more info functionality here
  }

  return (
    <header 
      className="banner" 
      style={{
        backgroundImage: 'url(https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg)'
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">Stranger Things</h1>
        <p className="banner-desc">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
          terrifying supernatural forces and one strange little girl.
        </p>
        <div className="banner-buttons d-flex gap-3">
          <button 
            className="btn btn-light banner-btn d-flex align-items-center gap-2"
            onClick={handlePlay}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play
          </button>
          <button 
            className="btn btn-secondary banner-btn d-flex align-items-center gap-2"
            onClick={handleMoreInfo}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            More Info
          </button>
        </div>
      </div>
      <div className="banner-fade" />
    </header>
  )
}

export default Banner