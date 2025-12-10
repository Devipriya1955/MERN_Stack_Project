import Row from '../Components/Row/Row'
import "./Pages.css";

function Movies() {
  const blockbusters = [
    { name: 'Oppenheimer', poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.' },
    { name: 'Top Gun Maverick', poster: 'https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg', description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, training a group of graduates for a specialized mission.' },
    { name: 'Spider-Man', poster: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.' },
    { name: 'The Batman', poster: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg', description: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a killer known as the Riddler.' },
    { name: 'Avengers', poster: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', description: 'After Thanos decimates half of all life in the universe, the remaining Avengers must find a way to reverse his actions and restore balance.' },
    { name: 'Dune', poster: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', description: 'Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. A betrayal leads him on a journey to ensure the future of his people.' },
    { name: 'Barbie', poster: 'https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg', description: 'Barbie and Ken are having the time of their lives in Barbieland. When they get a chance to go to the real world, they discover the joys and perils of living among humans.' },
    { name: 'The Marvels', poster: 'https://image.tmdb.org/t/p/original/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg', description: 'Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.' },
  ]

  const actionThrillers = [
    { name: 'John Wick 4', poster: 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', description: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, he must face off against a new enemy with powerful alliances.' },
    { name: 'Extraction 2', poster: 'https://image.tmdb.org/t/p/original/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg', description: 'After barely surviving his grievous wounds from his mission in Dhaka, Tyler Rake is back for another high-stakes extraction mission.' },
    { name: 'Mission Impossible', poster: 'https://image.tmdb.org/t/p/original/NNxYkU70HPurnNCSiCjYAmacwm.jpg', description: 'Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands.' },
    { name: 'Fast X', poster: 'https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg', description: 'Dom Toretto and his family become the targets of a vengeful son of a drug kingpin from the past, forcing them to confront their most lethal opponent yet.' },
    { name: 'Godzilla', poster: 'https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg', description: 'The epic battle continues as Godzilla faces off against Kong in a spectacular showdown that will determine the fate of the world.' },
    { name: 'The Equalizer 3', poster: 'https://image.tmdb.org/t/p/original/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg', description: 'Robert McCall finds himself at home in Southern Italy but discovers his new friends are under the control of local crime bosses.' },
    { name: 'Rebel Moon', poster: 'https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg', description: 'When a peaceful colony on the edge of the galaxy is threatened, a mysterious stranger becomes their best hope for survival.' },
    { name: 'Napoleon', poster: 'https://image.tmdb.org/t/p/original/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg', description: 'An epic look at Napoleon Bonaparte\'s origins and swift rise to emperor, viewed through the prism of his addictive relationship with his wife Josephine.' },
  ]

  const romance = [
    { name: 'Red White Royal Blue', poster: 'https://image.tmdb.org/t/p/original/zzaBKCJfRfLhEKGCFfbSZn0ozlc.jpg', description: 'When the son of the American President falls in love with Britain\'s Prince, it creates a media storm and threatens an international incident.' },
    { name: 'Anyone But You', poster: 'https://image.tmdb.org/t/p/original/5qHNlLz5BCT7P4ZKFnPhLxGVMat.jpg', description: 'After an amazing first date, two people discover they are complete opposites. But when their friends get married, they pretend to be a couple.' },
    { name: 'The Notebook', poster: 'https://image.tmdb.org/t/p/original/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg', description: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated by their social differences.' },
    { name: 'To All The Boys', poster: 'https://image.tmdb.org/t/p/original/hKHZhUbIyUAjcSrqJThFGKJhr1z.jpg', description: 'A teenage girl\'s secret love letters are exposed and her love life goes from imaginary to out of control.' },
    { name: 'Purple Hearts', poster: 'https://image.tmdb.org/t/p/original/4JyNWkryifWbWXJyxcWh3pVya6N.jpg', description: 'In spite of their many differences, a struggling musician and a Marine agree to a marriage of convenience for military benefits.' },
    { name: 'Through My Window', poster: 'https://image.tmdb.org/t/p/original/6gg7fvKc1ZxP33bYB7UEezMNXbi.jpg', description: 'Raquel has been in love with her neighbor Ares for years. When he finally notices her, their chemistry is undeniable despite their differences.' },
    { name: 'Love Actually', poster: 'https://image.tmdb.org/t/p/original/1ODdWLrJ78ARcCnARbIcbFeQ1Uf.jpg', description: 'Follows the lives of eight very different couples dealing with their love lives in various ways around Christmas in London.' },
    { name: 'Love at First Sight', poster: 'https://image.tmdb.org/t/p/original/rUmBgVxCpnq4K1U8nnFsVvzYhPo.jpg', description: 'Two strangers meet on a flight from New York to London and share an unforgettable connection before losing touch.' },
  ]

  const animated = [
    { name: 'Despicable Me', poster: 'https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg', description: 'Gru and his family must stop a new villain from stealing a powerful artifact that could doom the world.' },
    { name: 'Migration', poster: 'https://image.tmdb.org/t/p/original/ldfCF9RhR40mppkzmftxapaHeTo.jpg', description: 'A family of ducks decides to leave the safety of a pond in New England and embark on a vacation to Jamaica.' },
    { name: 'Trolls', poster: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg', description: 'Poppy and Branch discover that they are but one of six different Troll tribes scattered across six different lands devoted to different kinds of music.' },
    { name: 'Wonka', poster: 'https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg', description: 'The story focuses on a young Willy Wonka and how he met the Oompa-Loompas on one of his earliest adventures.' },
    { name: 'Elemental', poster: 'https://image.tmdb.org/t/p/original/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg', description: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental.' },
    { name: 'Spider-Verse', poster: 'https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg', description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People protecting its existence.' },
    { name: 'Turning Red', poster: 'https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg', description: 'A 13-year-old girl turns into a giant red panda whenever she gets too excited, which is practically always.' },
    { name: 'Luca', poster: 'https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg', description: 'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.' },
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