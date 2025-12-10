import Row from '../Components/Row/Row'
import '../pages/Pages.css'

function MyList() {
  const myFavorites = [
    { name: 'Stranger Things', poster: 'https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg' },
    { name: 'John Wick 4', poster: 'https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
    { name: 'Spider-Man', poster: 'https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg' },
    { name: 'Squid Game', poster: 'https://image.tmdb.org/t/p/original/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg' },
    { name: 'Top Gun Maverick', poster: 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { name: 'Wednesday', poster: 'https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg' },
    { name: 'Barbie', poster: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg' },
    { name: 'Oppenheimer', poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  ]

  const watchLater = [
    { name: 'Dune', poster: 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
    { name: 'Napoleon', poster: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { name: 'Killers of the Flower Moon', poster: 'https://image.tmdb.org/t/p/original/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg' },
    { name: 'The Witcher', poster: 'https://image.tmdb.org/t/p/original/aX6rP4Yzy4VcWQnA1xJyNPy1rFD.jpg' },
    { name: 'Bridgerton', poster: 'https://image.tmdb.org/t/p/original/xAKMj134XHQVNHLC6rWsccLMenG.jpg' },
    { name: 'The Last of Us', poster: 'https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg' },
    { name: 'The Batman', poster: 'https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg' },
    { name: 'Avengers', poster: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">My List</h1>
        <p className="page-subtitle">Your personalized collection of movies and shows</p>
      </div>
      {myFavorites.length > 0 ? (
        <>
          <Row title="My Favorites" items={myFavorites} isLarge />
          <Row title="Watch Later" items={watchLater} />
        </>
      ) : (
        <div className="empty-list text-center text-white py-5">
          <h3>Your list is empty</h3>
          <p className="text-secondary">Add movies and shows to your list to watch them later</p>
        </div>
      )}
    </div>
  )
}

export default MyList