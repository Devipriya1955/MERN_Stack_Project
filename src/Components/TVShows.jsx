import Row from '../Components/Row/Row'
import '../pages/Pages.css'

function TVShows() {
  const popularTVShows = [
    { name: 'Stranger Things', poster: 'https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg' },
    { name: 'Squid Game', poster: 'https://image.tmdb.org/t/p/original/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg' },
    { name: 'The Witcher', poster: 'https://image.tmdb.org/t/p/original/aX6rP4Yzy4VcWQnA1xJyNPy1rFD.jpg' },
    { name: 'Bridgerton', poster: 'https://image.tmdb.org/t/p/original/xAKMj134XHQVNHLC6rWsccLMenG.jpg' },
    { name: 'Wednesday', poster: 'https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg' },
    { name: 'The Crown', poster: 'https://image.tmdb.org/t/p/original/1X7Z4K0VVSH3PEsQEgOZN7frTc8.jpg' },
    { name: 'Money Heist', poster: 'https://image.tmdb.org/t/p/original/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg' },
    { name: 'Ozark', poster: 'https://image.tmdb.org/t/p/original/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg' },
  ]

  const dramaSeries = [
    { name: 'Breaking Bad', poster: 'https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg' },
    { name: 'Better Call Saul', poster: 'https://image.tmdb.org/t/p/original/xVzvD5IKDK2LRJnfyRhZCdicQcL.jpg' },
    { name: 'The Last of Us', poster: 'https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg' },
    { name: 'Succession', poster: 'https://image.tmdb.org/t/p/original/vv2HyH8sdT2VEGHddLWF8s0hZA.jpg' },
    { name: 'The White Lotus', poster: 'https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg' },
    { name: 'Dexter', poster: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg' },
    { name: 'House of the Dragon', poster: 'https://image.tmdb.org/t/p/original/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg' },
    { name: 'The Handmaids Tale', poster: 'https://image.tmdb.org/t/p/original/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg' },
  ]

  const comedySeries = [
    { name: 'The Office', poster: 'https://image.tmdb.org/t/p/original/8l5oL8Y4Kcw82ygpRfJMpQ5lhDT.jpg' },
    { name: 'Brooklyn Nine-Nine', poster: 'https://image.tmdb.org/t/p/original/f496cm9enuEsZkSPzCwnTESEK5s.jpg' },
    { name: 'Ted Lasso', poster: 'https://image.tmdb.org/t/p/original/aXy0s7jqms82TSVD5UtR5eemOTW.jpg' },
    { name: 'Modern Family', poster: 'https://image.tmdb.org/t/p/original/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg' },
    { name: 'Parks and Recreation', poster: 'https://image.tmdb.org/t/p/original/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg' },
    { name: 'Arrested Development', poster: 'https://image.tmdb.org/t/p/original/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg' },
    { name: 'The Good Place', poster: 'https://image.tmdb.org/t/p/original/zLu3kS0sbTBqPHoOwSF1bR12dSe.jpg' },
    { name: 'What We Do in Shadows', poster: 'https://image.tmdb.org/t/p/original/oIkxqt6ug5zT5ZSUUyHbZGcjb4E.jpg' },
  ]

  const sciFiFantasy = [
    { name: 'Game of Thrones', poster: 'https://image.tmdb.org/t/p/original/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg' },
    { name: 'The Boys', poster: 'https://image.tmdb.org/t/p/original/roYyPiQDQKmIKUEhO912693tSja.jpg' },
    { name: 'Loki', poster: 'https://image.tmdb.org/t/p/original/jLBI45nJWULuPflYBNb8hQmbs0B.jpg' },
    { name: 'Dark', poster: 'https://image.tmdb.org/t/p/original/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg' },
    { name: 'The Mandalorian', poster: 'https://image.tmdb.org/t/p/original/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg' },
    { name: 'Westworld', poster: 'https://image.tmdb.org/t/p/original/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg' },
    { name: 'Foundation', poster: 'https://image.tmdb.org/t/p/original/p9PmyW7keFJKRZnwYLjv9lEhCOF.jpg' },
    { name: 'Shadow and Bone', poster: 'https://image.tmdb.org/t/p/original/BbNvKCuEF4SRzFXR16aK6ISFu8.jpg' },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">TV Shows</h1>
        <p className="page-subtitle">Binge-worthy series and originals</p>
      </div>
      <Row title="Popular on Netflix" items={popularTVShows} isLarge />
      <Row title="Drama Series" items={dramaSeries} />
      <Row title="Comedy Series" items={comedySeries} />
      <Row title="Sci-Fi & Fantasy" items={sciFiFantasy} />
    </div>
  )
}

export default TVShows