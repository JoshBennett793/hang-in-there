// query selector variables go here 👇

// POSTER //
var mainPoster = document.querySelector('.main-poster');
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

// BUTTONS //
var randomPosterButton = document.querySelector('.show-random');
var makePosterBtn = document.querySelector('.show-form');
var showPosterBtn = document.querySelector('.make-poster');
var backToMainBtn = document.querySelector('.back-to-main');
var showMainBtn = document.querySelector('.show-main');
var savePosterBtn = document.querySelector('.save-poster');
var showSavedPostersBtn = document.querySelector('.show-saved');

// FORM //
var posterForm = document.querySelector('.poster-form');
var imageInput = document.querySelector('#poster-image-url');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');

// SAVED POSTERS
var savedPostersSection = document.querySelector('.saved-posters');
var savedPostersGrid = document.querySelector('.saved-posters-grid');

// POSTER DATA
var images = [
  './assets/bees.jpg',
  './assets/bridge.jpg',
  './assets/butterfly.jpg',
  './assets/cliff.jpg',
  './assets/elephant.jpg',
  './assets/flock.jpg',
  './assets/fox.jpg',
  './assets/frog.jpg',
  './assets/horse.jpg',
  './assets/lion.jpg',
  './assets/mountain.jpg',
  './assets/pier.jpg',
  './assets/puffins.jpg',
  './assets/pug.jpg',
  './assets/runner.jpg',
  './assets/squirrel.jpg',
  './assets/tiger.jpg',
  './assets/turtle.jpg',
];
var titles = [
  'determination',
  'success',
  'inspiration',
  'perspiration',
  'grit',
  'empathy',
  'feelings',
  'hope',
  'believe',
  'try',
  'conviction',
  'accomplishment',
  'achievement',
  'ambition',
  'clarity',
  'challenge',
  'commitment',
  'confidence',
  'action',
  'courage',
  'focus',
  'breathe',
  'gratitude',
  'imagination',
  'kindness',
  'mindfulness',
  'knowledge',
  'opportunity',
  'passion',
  'patience',
  'practice',
  'smile',
  'trust',
  'understanding',
  'wisdom',
];
var quotes = [
  'Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.',
  'You are braver than you believe, stronger than you seem and smarter than you think.',
  'You are confined only by the walls you build yourself.',
  'The one who has confidence gains the confidence of others.',
  'Act as if what you do makes a difference. It does.',
  'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  'Never bend your head. Always hold it high. Look the world straight in the eye.',
  'What you get by achieving your goals is not as important as what you become by achieving your goals.',
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
  'Life is like riding a bicycle. To keep your balance, you must keep moving.',
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  'You are never too old to set another goal or to dream a new dream.',
  "Try to be a rainbow in someone else's cloud.",
  'You do not find the happy life. You make it.',
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  'Sometimes you will never know the value of a moment, until it becomes a memory.',
  'The most wasted of days is one without laughter.',
  'You must do the things you think you cannot do.',
  "It isn't where you came from. It's where you're going that counts.",
  'It is never too late to be what you might have been.',
  "Happiness often sneaks in through a door you didn't know you left open.",
  'We must be willing to let go of the life we planned so as to have the life that is waiting for us.',
  'Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.',
  'Be the change that you wish to see in the world.',
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  'If I cannot do great things, I can do small things in a great way.',
  "Don't wait. The time will never be just right.",
  'With the right kind of coaching and determination you can accomplish anything.',
  'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.',
  'No matter what people tell you, words and ideas can change the world.',
  'Each person must live their life as a model for others.',
  'A champion is defined not by their wins but by how they can recover when they fall.',
];
var savedPosters = [];
var currentPoster;

// EVENT LISTENERS

window.addEventListener('load', renderRandomPoster);

randomPosterButton.addEventListener('click', renderRandomPoster);

makePosterBtn.addEventListener('click', toggleMainAndForm);

showPosterBtn.addEventListener('click', showMyPoster);

showMainBtn.addEventListener('click', toggleMainAndForm);

showSavedPostersBtn.addEventListener('click', () => {
  toggleMainAndSaved();
  renderSavedPosters();
});

savedPostersGrid.addEventListener('dblclick', (event) => {
	removePosterFromArray(event);
	renderSavedPosters();
});

backToMainBtn.addEventListener('click', toggleMainAndSaved);

savePosterBtn.addEventListener('click', saveThisPoster);

// FUNCTIONS AND EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getImageURL(imgArray) {
  var randomIndex = getRandomIndex(imgArray);
  return imgArray[randomIndex];
}

function getRandomQuote(quoteArray) {
  var randomIndex = getRandomIndex(quoteArray);
  return quoteArray[randomIndex];
}

function getRandomTitle(titleArray) {
  var randomIndex = getRandomIndex(titleArray);
  return titleArray[randomIndex];
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(),
    imageURL: imageURL,
    title: title,
    quote: quote,
  };
}

function changePosterImg(image) {
  posterImg.src = image;
}

function changePosterTitle(title) {
  posterTitle.innerText = title;
}

function changePosterQuote(quote) {
  posterQuote.innerText = quote;
}

function renderPoster() {
  changePosterImg(currentPoster.imageURL);
  changePosterTitle(currentPoster.title);
  changePosterQuote(currentPoster.quote);
}

function renderRandomPoster() {
  currentPoster = createPoster(
    getImageURL(images),
    getRandomTitle(titles),
    getRandomQuote(quotes),
  );

	renderPoster();
}

function toggleMainPoster() {
  mainPoster.classList.toggle('hidden');
}

function toggleForm() {
  posterForm.classList.toggle('hidden');
}

function toggleShowSavedPoster() {
  savedPostersSection.classList.toggle('hidden');
}

function toggleMainAndForm() {
  toggleMainPoster();
  toggleForm();
}

function toggleMainAndSaved() {
  toggleMainPoster();
  toggleShowSavedPoster();
}

function pushURLToImages(URL) {
  images.push(URL);
}

function pushTitleToTitlesArray(title) {
  titles.push(title);
}

function pushQuoteToQuotesArray(quote) {
  quotes.push(quote);
}

function showMyPoster(event) {
  event.preventDefault();

  currentPoster = createPoster(
    imageInput.value,
    titleInput.value,
    quoteInput.value,
  );

  toggleForm();
  toggleMainPoster();
 
  pushURLToImages(currentPoster.imageURL);
  pushTitleToTitlesArray(currentPoster.title);
  pushQuoteToQuotesArray(currentPoster.quote);

  renderPoster();
}

function saveThisPoster() {
  if (savedPosters.length === 0) {
    savedPosters.push(currentPoster);
    return;
  }

  for (var i = 0; i < savedPosters.length; i++) {
    if (
      savedPosters[i].imageURL === currentPoster.imageURL &&
      savedPosters[i].title === currentPoster.title &&
      savedPosters[i].quotes === currentPoster.quotes
    ) {
      return;
    }
  }

  savedPosters.push(currentPoster);
}

function renderSavedPosters() {
  savedPostersGrid.innerHTML = '';

  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML += `
		<article class="poster" id=${savedPosters[i].id}>
      <img class="poster-img" src="${savedPosters[i].imageURL}" alt="nothin' to see here">
      <h1 class="poster-title">${savedPosters[i].title}</h1>
      <h3 class="poster-quote">${savedPosters[i].quote}</h3>
    </article>`;
  }
}

function removePosterFromArray(event) {
  var poster = event.target.closest('article');

  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id === parseInt(poster.id)) {
      savedPosters.splice(savedPosters.indexOf(savedPosters[i]), 1);
    }
  }
}
