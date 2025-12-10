import Banner from '../Banner/Banner'
import Row from '../Row/Row'
import './Home.css'

function Home() {
  const trendingItems = [
    { name: 'Oppenheimer', poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { name: 'The Marvels', poster: 'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg' },
    { name: 'Killers of the Flower Moon', poster: 'https://image.tmdb.org/t/p/original/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg' },
    { name: 'Napoleon', poster: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { name: 'The Hunger Games', poster: 'https://image.tmdb.org/t/p/original/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg' },
    { name: 'Wonka', poster: 'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg' },
    { name: 'Migration', poster: 'https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg' },
    { name: 'Godzilla', poster: 'https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg' },
  ]

  const netflixOriginals = [
    { name: 'Stranger Things', poster: 'https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg' },
    { name: 'Squid Game', poster: 'https://image.tmdb.org/t/p/original/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg' },
    { name: 'The Witcher', poster: 'https://image.tmdb.org/t/p/original/aX6rP4Yzy4VcWQnA1xJyNPy1rFD.jpg' },
    { name: 'Bridgerton', poster: 'https://image.tmdb.org/t/p/original/xAKMj134XHQVNHLC6rWsccLMenG.jpg' },
    { name: 'Wednesday', poster: 'https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg' },
    { name: 'The Crown', poster: 'https://image.tmdb.org/t/p/original/1X7Z4K0VVSH3PEsQEgOZN7frTc8.jpg' },
    { name: 'Money Heist', poster: 'https://image.tmdb.org/t/p/original/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg' },
    { name: 'Ozark', poster: 'https://image.tmdb.org/t/p/original/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg' },
  ]

  const actionMovies = [
    { name: 'Spider-Man', poster: 'https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg' },
    { name: 'John Wick 4', poster: 'https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
    { name: 'The Batman', poster: 'https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg' },
    { name: 'Extraction 2', poster: 'https://image.tmdb.org/t/p/original/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg' },
    { name: 'Dune', poster: 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
    { name: 'Mission Impossible', poster: 'https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg' },
    { name: 'Top Gun Maverick', poster: 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { name: 'Avengers', poster: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
  ]

  const comedyMovies = [
    { name: 'Barbie', poster: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg' },
    { name: 'Despicable Me', poster: 'https://image.tmdb.org/t/p/original/vgJZSqKMXWDDx09iSIStGKfHMku.jpg' },
    { name: 'No Hard Feelings', poster: 'https://image.tmdb.org/t/p/original/qJxzjUjCpTPvDHldNnlbRC4OqEh.jpg' },
    { name: 'Joy Ride', poster: 'https://image.tmdb.org/t/p/original/8a9uF2bBCdfkq8gM1hMFd5fRaZF.jpg' },
    { name: 'Red White Royal Blue', poster: 'https://image.tmdb.org/t/p/original/w46Vw536HwNnEzOa7J24YH9DPRS.jpg' },
    { name: 'Good Burger 2', poster: 'https://image.tmdb.org/t/p/original/2h6yFHWP8ggZ8FFkSRwh4F9Kq5Q.jpg' },
    { name: 'Anyone But You', poster: 'https://image.tmdb.org/t/p/original/xvk5AhfhgQcMgi01clVisKGS9F7.jpg' },
    { name: 'Trolls', poster: 'https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg' },
  ]

  const horrorMovies = [
    { name: 'Scream VI', poster: 'https://image.tmdb.org/t/p/original/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg' },
    { name: 'M3GAN', poster: 'https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg' },
    { name: 'Insidious', poster: 'https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { name: 'Evil Dead Rise', poster: 'https://image.tmdb.org/t/p/original/53z2fXEKfnNg2uSOPss2unPBGX1.jpg' },
    { name: 'The Nun II', poster: 'https://image.tmdb.org/t/p/original/pxJkWsnavJfHNjkKaCl1dLKhZJb.jpg' },
    { name: 'Five Nights at Freddys', poster: 'https://image.tmdb.org/t/p/original/lDCIQ1Qe7cRnhZ4ybQVVEbadMZ.jpg' },
    { name: 'Talk to Me', poster: 'https://image.tmdb.org/t/p/original/AbCILp98PtEOFJMrAiJLC1YlkBw.jpg' },
    { name: 'Saw X', poster: 'https://image.tmdb.org/t/p/original/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg' },
  ]

  const documentaries = [
    { name: 'Planet Earth', poster: 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
    { name: 'Our Planet', poster: 'https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg' },
    { name: 'Blue Planet', poster: 'https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
    { name: 'Seaspiracy', poster: 'https://image.tmdb.org/t/p/original/6nJNWySmP7OVeBB9WDJXJPBAdPX.jpg' },
    { name: 'The Social Dilemma', poster: 'https://image.tmdb.org/t/p/original/tqj8rlYPNRAHQWl9ZhrVWehJKPQ.jpg' },
    { name: 'My Octopus Teacher', poster: 'https://image.tmdb.org/t/p/original/2JdxnFbPWNnHfK8UCnZdDtJTXlz.jpg' },
    { name: 'Tiger King', poster: 'https://image.tmdb.org/t/p/original/j2kFCLXqBbO13XZDzXpFJNHUaTI.jpg' },
    { name: 'Cosmos', poster: 'https://image.tmdb.org/t/p/original/vVv6qYO8r9FzRttAKiPX0WZPgmQ.jpg' },
  ]

  return (
    <div className="home">
      <Banner />
      <div className="home-rows">
        <Row title="Trending Now" items={trendingItems} isLarge />
        <Row title="Netflix Originals" items={netflixOriginals} isLarge />
        <Row title="Action Movies" items={actionMovies} />
        <Row title="Comedy Movies" items={comedyMovies} />
        <Row title="Horror Movies" items={horrorMovies} />
        <Row title="Documentaries" items={documentaries} />
      </div>
    </div>
  )
}

export default Home