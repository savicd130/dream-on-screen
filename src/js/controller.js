// const { async } = require('regenerator-runtime');

// const test = async function () {
//   const trying = await fetch(
//     'https://imdb-api.com/en/API/Top250Movies/k_krckt3r2'
//     // 'https://imdb-api.com/en/API/Ratings/k_krckt3r2/tt1375666'
//   );
//   const res = await trying.json();

//   console.log(res);
// };

// // https://imdb-api.com/en/API/MostPopularMovies/k_krckt3r2

// test();

// Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer 603B0C5669DE80.36842977',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://api4.thetvdb.com/v4/artwork-statuses', { answer: 42 }).then(
//   data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   }
// );

// var unirest = require('unirest');

// var req = unirest(
//   'GET',
//   'https://movie-database-imdb-alternative.p.rapidapi.com/'
// );

// req.query({
//   s: 'Avengers Endgame',
//   page: '1',
//   r: 'json',
// });

// req.headers({
//   'x-rapidapi-key': 'd74c976090msh4ca85256c9ca8dbp1a1d25jsnb02c2c0d47c0',
//   'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//   useQueryString: true,
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });

/*

adult: false

backdrop_path: "/tY6zVyt0OubPgCapbXFJLKhQqSu.jpg"

belongs_to_collection: null

budget: 1350000

genres: Array(2)
0: {id: 35, name: "Comedy"}
1: {id: 80, name: "Crime"}

homepage: "http://www.universalstudiosentertainment.com/lock-stock-and-two-smoking-barrels/"

id: 100

imdb_id: "tt0120735"

original_language: "en"

original_title: "Lock, Stock and Two Smoking Barrels"

overview: "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door."

popularity: 8.166

poster_path: "/8kSerJrhrJWKLk1LViesGcnrUPE.jpg"



production_companies: Array(5)
0: {id: 491, logo_path: "/rUp0lLKa1pr4UsPm8fgzmnNGxtq.png", name: "Summit Entertainment", origin_country: "US"}
1: {id: 21920, logo_path: null, name: "The Steve Tisch Company", origin_country: ""}
2: {id: 13419, logo_path: null, name: "SKA Films", origin_country: ""}
3: {id: 1382, logo_path: "/sOg7LGESPH5vCTOIdbMhLuypoLL.png", name: "PolyGram Filmed Entertainment", origin_country: "US"}
4: {id: 20076, logo_path: "/i9qXGJIP9fGN22PP5jXUVENbyHi.png", name: "HandMade Films", origin_country: "GB"}
length: 5




production_countries: Array(1)

0: {iso_3166_1: "GB", name: "United Kingdom"}


release_date: "1998-03-05"

revenue: 28356188
runtime: 105

spoken_languages: Array(1)
0: {english_name: "English", iso_639_1: "en", name: "English"}



status: "Released"
tagline: "A Disgrace to Criminals Everywhere."

title: "Lock, Stock and Two Smoking Barrels"

video: false

vote_average: 8.2

vote_count: 4632

*/
