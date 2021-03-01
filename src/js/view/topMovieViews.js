// class ViewTopMovies {
//   // _parentEl = document.querySelector('.movies');
//   // _data;

//   renderData(data) {
//     this._data = data;
//   }
//   upadateOnDOM() {
//     // this._parentEl.innerHTML = '';

//     // this._parentEl.insertAdjacentHTML('afterbegin', markup);
//     document.querySelector('.movies').innerHTML = '';

//     document.querySelector('.movies').insertAdjacentHTML('afterbegin', markup);
//     const markup = this._data.map(type => {
//       return `
//       <div class="card">
//           <div class="card__star">
//               <img src="./src/img/star.png" alt="star">
//               <p class="card__star-rating">${type.imDbRating}</p>
//           </div>
//           <div class="card__pic">
//               <img src="${type.image}" alt="${type.fullTitle}">
//           </div>
//           <div class="card__title">
//               ${type.fullTitle}
//           </div>
//       </div>
// `;
//     });

//     // const markup = `
//     //             <div class="card">
//     //                 <div class="card__star">
//     //                     <img src="./src/img/star.png" alt="star">
//     //                     <p class="card__star-rating">${this._data.imDbRating}</p>
//     //                 </div>
//     //                 <div class="card__pic">
//     //                     <img src="${this._data.image}" alt="${this._data.fullTitle}">
//     //                 </div>
//     //                 <div class="card__title">
//     //                     ${this._data.fullTitle}
//     //                 </div>
//     //             </div>
//     // `;
//   }
// }

// export default new ViewTopMovies();
