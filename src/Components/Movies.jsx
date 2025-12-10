import Row from '../Components/Row/Row'
import '../pages/Pages.css'

function Movies() {
  const blockbusters = [
    { name: 'Oppenheimer', poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { name: 'Top Gun Maverick', poster: 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { name: 'Spider-Man', poster: 'https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg' },
    { name: 'The Batman', poster: 'https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg' },
    { name: 'Avengers', poster: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
    { name: 'Dune', poster: 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
    { name: 'Barbie', poster: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg' },
    { name: 'The Marvels', poster: 'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg' },
  ]

  const actionThrillers = [
    { name: 'John Wick 4', poster: 'https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
    { name: 'Extraction 2', poster: 'https://image.tmdb.org/t/p/original/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg' },
    { name: 'Mission Impossible', poster: 'https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg' },
    { name: 'Fast X', poster: 'https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' },
    { name: 'Godzilla', poster: 'https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg' },
    { name: 'The Equalizer 3', poster: 'https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg' },
    { name: 'Rebel Moon', poster: 'https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg' },
    { name: 'Napoleon', poster: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
  ]

  const romance = [
    { name: 'Red White Royal Blue', poster: 'https://image.tmdb.org/t/p/original/w46Vw536HwNnEzOa7J24YH9DPRS.jpg' },
    { name: 'Anyone But You', poster: 'https://image.tmdb.org/t/p/original/xvk5AhfhgQcMgi01clVisKGS9F7.jpg' },
    { name: 'The Notebook', poster: 'https://image.tmdb.org/t/p/original/fL7ALd0w5hdWhS2R6VI4X6WV7fI.jpg' },
    { name: 'To All The Boys', poster: 'https://image.tmdb.org/t/p/original/hZT4nVk1lm4Mx8pY8ReBpkqWkzF.jpg' },
    { name: 'Purple Hearts', poster: 'https://image.tmdb.org/t/p/original/kJVQ9L8O8dDi1LxLFvGFxn19gka.jpg' },
    { name: 'Through My Window', poster: 'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    { name: 'Love Actually', poster: 'https://image.tmdb.org/t/p/original/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg' },
    { name: 'Love at First Sight', poster: 'https://image.tmdb.org/t/p/original/8a9uF2bBCdfkq8gM1hMFd5fRaZF.jpg' },
  ]

  const animated = [
    { name: 'Despicable Me', poster: 'https://image.tmdb.org/t/p/original/vgJZSqKMXWDDx09iSIStGKfHMku.jpg' },
    { name: 'Migration', poster: 'https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg' },
    { name: 'Trolls', poster: 'https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg' },
    { name: 'Wonka', poster: 'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg' },
    { name: 'Elemental', poster: 'https://image.tmdb.org/t/p/original/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg' },
    { name: 'Spider-Verse', poster: 'https://image.tmdb.org/t/p/original/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg' },
    { name: 'Turning Red', poster: 'https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg' },
    { name: 'Luca', poster: 'https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg' },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Movies</h1>
        <p className="page-subtitle">Endless entertainment awaits</p>
      </div>
      <Row title="Blockbusters" items={blockbusters} isLarge />
      <Row title="Action & Thrillers" items={actionThrillers} />
      <Row title="Romance" items={romance} />
      <Row title="Animated" items={animated} />
    </div>
  )
}

export default Movies