import Row from './Row/Row'
import "./Pages.css";

function TV() {
  const popularTVShows = [
    { name: 'Stranger Things', poster: 'https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg', description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.' },
    { name: 'Squid Game', poster: 'https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', description: 'Hundreds of cash-strapped contestants accept an invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.' },
    { name: 'The Witcher', poster: 'https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg', description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.' },
    { name: 'Bridgerton', poster: 'https://image.tmdb.org/t/p/original/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg', description: 'The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society during the Regency era.' },
    { name: 'Wednesday', poster: 'https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', description: 'Wednesday Addams\' years as a student at Nevermore Academy, where she tries to master her psychic powers, stop a killing spree and solve the mystery that embroiled her parents.' },
    { name: 'The Crown', poster: 'https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg', description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.' },
    { name: 'Money Heist', poster: 'https://image.tmdb.org/t/p/original/MoEKaPFHABtA1xKoOteirGaHl1.jpg', description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history.' },
    { name: 'Ozark', poster: 'https://image.tmdb.org/t/p/original/m73fD40sdM714K9ZiaiGu0pmqRn.jpg', description: 'A financial adviser drags his family to the Ozarks after a money-laundering scheme goes wrong and he must pay off a debt to a Mexican drug cartel.' },
  ]

  const dramaSeries = [
    { name: 'Breaking Bad', poster: 'https://image.tmdb.org/t/p/original/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg', description: 'A high school chemistry teacher diagnosed with terminal lung cancer turns to manufacturing and selling methamphetamine to secure his family\'s future.' },
    { name: 'Better Call Saul', poster: 'https://image.tmdb.org/t/p/original/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg', description: 'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.' },
    { name: 'The Last of Us', poster: 'https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', description: 'Twenty years after modern civilization has been destroyed, Joel must smuggle young Ellie out of an oppressive quarantine zone in a desperate journey across a post-pandemic America.' },
    { name: 'Succession', poster: 'https://image.tmdb.org/t/p/original/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', description: 'The Roy family controls one of the biggest media and entertainment conglomerates, but their world changes when their father steps down from the company.' },
    { name: 'The White Lotus', poster: 'https://image.tmdb.org/t/p/original/gH5i3JbnLsyTvcImlofNvXtH3i5.jpg', description: 'The exploits of various guests and employees at an exclusive tropical resort over the span of a week.' },
    { name: 'Dexter', poster: 'https://image.tmdb.org/t/p/original/6Vr2CuxBz8xQPz6gLULMF40onvE.jpg', description: 'A Miami forensics expert moonlights as a serial killer of criminals whom he believes have escaped justice.' },
    { name: 'House of the Dragon', poster: 'https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg', description: 'The reign of House Targaryen begins with this prequel to Game of Thrones, telling the story of the Targaryen civil war known as the Dance of the Dragons.' },
    { name: 'The Handmaids Tale', poster: 'https://image.tmdb.org/t/p/original/tFTJ3YbOor3BtabI96QehXxEBii.jpg', description: 'Set in a dystopian future where a totalitarian regime treats women as property of the state, this series follows one woman forced into servitude.' },
  ]

  const comedySeries = [
    { name: 'The Office', poster: 'https://image.tmdb.org/t/p/original/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg', description: 'A mockumentary on a group of typical office workers where the workday consists of ego clashes, inappropriate behavior, and tedium.' },
    { name: 'Brooklyn Nine-Nine', poster: 'https://image.tmdb.org/t/p/original/hgRMSOt7a1b8qyQR68vUixJPang.jpg', description: 'Comedy series following the exploits of detectives in a New New York precinct, led by an immature but talented detective under a new captain.' },
    { name: 'Ted Lasso', poster: 'https://image.tmdb.org/t/p/original/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg', description: 'An American football coach is hired to manage a British soccer team despite having no experience coaching soccer.' },
    { name: 'Modern Family', poster: 'https://image.tmdb.org/t/p/original/klL4yhwiU8aF4AuF5dCfJA9sRnS.jpg', description: 'Three different but related families face trials and tribulations in their own uniquely comedic ways in modern-day Los Angeles.' },
    { name: 'Parks and Recreation', poster: 'https://image.tmdb.org/t/p/original/dDuzrl9rUIBYieZjqmtbJf9yFp.jpg', description: 'The absurd antics of an Indiana town\'s public officials as they pursue sundry projects to make their city a better place.' },
    { name: 'Arrested Development', poster: 'https://image.tmdb.org/t/p/original/qMzwO952hMWQSCfHkp7IL20s4K7.jpg', description: 'Level-headed son Michael Bluth takes over family affairs after his father is imprisoned, but the rest of his spoiled family makes his job unbearable.' },
    { name: 'The Good Place', poster: 'https://image.tmdb.org/t/p/original/qIhsuhoIYR5yTnDta0IL4senbeN.jpg', description: 'Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.' },
    { name: 'What We Do in Shadows', poster: 'https://image.tmdb.org/t/p/original/chckIPxBbvyFCcCFz5NncH7cxAo.jpg', description: 'A documentary-style look into the daily lives of four vampires who\'ve lived together for hundreds of years on Staten Island.' },
  ]

  const sciFiFantasy = [
    { name: 'Game of Thrones', poster: 'https://image.tmdb.org/t/p/original/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg', description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.' },
    { name: 'The Boys', poster: 'https://image.tmdb.org/t/p/original/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg', description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers in this dark and violent superhero satire.' },
    { name: 'Loki', poster: 'https://image.tmdb.org/t/p/original/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg', description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.' },
    { name: 'Dark', poster: 'https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg', description: 'A family saga with a supernatural twist set in a German town where the disappearance of two children exposes the relationships among four families.' },
    { name: 'The Mandalorian', poster: 'https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg', description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.' },
    { name: 'Westworld', poster: 'https://image.tmdb.org/t/p/original/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg', description: 'Set at the intersection of the near future and the reimagined past, explore a world where every human appetite can be indulged without consequence.' },
    { name: 'Foundation', poster: 'https://image.tmdb.org/t/p/original/8o2RMPdCSLPFcQpaqcsKuJ54Iso.jpg', description: 'A complex saga of humans scattered on planets throughout the galaxy, living under the rule of the Galactic Empire.' },
    { name: 'Shadow and Bone', poster: 'https://image.tmdb.org/t/p/original/1ZoxZGP6TUwnNDYLt7JO1sMiODs.jpg', description: 'Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.' },
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

export default TV
