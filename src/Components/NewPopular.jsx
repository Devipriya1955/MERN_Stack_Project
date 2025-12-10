import Row from '../Components/Row/Row'
import "./Pages.css";


function NewPopular() {
  const newReleases = [
    { name: 'Oppenheimer', poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { name: 'Barbie', poster: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg' },
    { name: 'The Marvels', poster: 'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg' },
    { name: 'Killers of the Flower Moon', poster: 'https://image.tmdb.org/t/p/original/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg' },
    { name: 'Napoleon', poster: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { name: 'The Hunger Games', poster: 'https://image.tmdb.org/t/p/original/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg' },
    { name: 'Wonka', poster: 'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg' },
    { name: 'Migration', poster: 'https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg' },
  ]

  const topTen = [
    { name: 'John Wick 4', poster: 'https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
    { name: 'Top Gun Maverick', poster: 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { name: 'Spider-Man', poster: 'https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg' },
    { name: 'Stranger Things', poster: 'https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg' },
    { name: 'Squid Game', poster: 'https://image.tmdb.org/t/p/original/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg' },
    { name: 'Wednesday', poster: 'https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg' },
    { name: 'The Last of Us', poster: 'https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg' },
    { name: 'Dune', poster: 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
  ]

  const comingSoon = [
    { name: 'Godzilla', poster: 'https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg' },
    { name: 'Fast X', poster: 'https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' },
    { name: 'House of the Dragon', poster: 'https://image.tmdb.org/t/p/original/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg' },
    { name: 'The Witcher', poster: 'https://image.tmdb.org/t/p/original/aX6rP4Yzy4VcWQnA1xJyNPy1rFD.jpg' },
    { name: 'Mission Impossible', poster: 'https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg' },
    { name: 'Elemental', poster: 'https://image.tmdb.org/t/p/original/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg' },
    { name: 'Spider-Verse', poster: 'https://image.tmdb.org/t/p/original/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg' },
    { name: 'Rebel Moon', poster: 'https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg' },
  ]

  const worthTheWait = [
    { name: 'Avengers', poster: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
    { name: 'The Batman', poster: 'https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg' },
    { name: 'Game of Thrones', poster: 'https://image.tmdb.org/t/p/original/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg' },
    { name: 'Breaking Bad', poster: 'https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg' },
    { name: 'The Boys', poster: 'https://image.tmdb.org/t/p/original/roYyPiQDQKmIKUEhO912693tSja.jpg' },
    { name: 'Bridgerton', poster: 'https://image.tmdb.org/t/p/original/xAKMj134XHQVNHLC6rWsccLMenG.jpg' },
    { name: 'The Crown', poster: 'https://image.tmdb.org/t/p/original/1X7Z4K0VVSH3PEsQEgOZN7frTc8.jpg' },
    { name: 'Money Heist', poster: 'https://image.tmdb.org/t/p/original/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg' },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">New & Popular</h1>
        <p className="page-subtitle">Fresh releases and trending content</p>
      </div>
      <Row title="New on Netflix" items={newReleases} isLarge />
      <Row title="Top 10 in Your Country Today" items={topTen} isLarge />
      <Row title="Coming This Week" items={comingSoon} />
      <Row title="Worth the Wait" items={worthTheWait} />
    </div>
  )
}

export default NewPopular