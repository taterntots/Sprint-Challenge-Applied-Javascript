// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data.articles);
        for(let key in response.data.articles) {
            // console.log(id);
            for(let i = 0; i < response.data.articles[key].length; i++) {
                console.log(response.data.articles[key]);
                const entryPoint = document.querySelector('.cards-container');
                const articleCard = cardCreator(response.data.articles[key][i]);
                // console.log(response.data.articles[key][i]);
                entryPoint.appendChild(articleCard);
            }
        }
    })

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         // console.log(response);
//         Object.entries(response.data.articles).forEach(article => {
//             console.log(article);
//             const entryPoint = document.querySelector('cards-container');
//             const articleCard = cardCreator(article);
//             entryPoint.appendChild(articleCard);
//         })
//     })

function cardCreator(object) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = object.headline;
    newCard.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    newCard.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const imgAuthor = document.createElement('img');
    imgAuthor.src = object.authorPhoto;
    imgContainer.appendChild(imgAuthor);

    const authorsName = document.createElement('span');
    authorsName.textContent = `By ${object.authorName}`;
    author.appendChild(authorsName);

    return newCard;
}