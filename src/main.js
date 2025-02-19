import { fetchImages } from './js/pixabay-api';
import { renderImages } from '/js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import messageSvg from './img/error-svg-1.svg';

const searchForm = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
const loadingMessage = document.querySelector('#loading-message');
const searchButton = searchForm.querySelector('button');

const iziToastStyle = {
  messageColor: '#fafafb',
  backgroundColor: '#ef4040',
  messageSize: '16px',
  timeout: 4000,
  iconUrl: messageSvg,
  position: 'topRight',
  displayMode: 'replace',
  transitionIn: 'flipInX',
};

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const searchQuery = e.target.elements.searchQuery.value.trim();

  document.querySelector('.gallery').innerHTML = '';

  loadingMessage.style.display = 'none';

  if (!searchQuery) {
    iziToast.error({
      ...iziToastStyle,
      message: 'Please enter a search query!',
    });
    return;
  }

  showLoader();
  loadingMessage.style.display = 'block';
  searchButton.disabled = true;

  try {
    const images = await fetchImages(searchQuery);
    if (images.length === 0) {
      iziToast.error({
        ...iziToastStyle,
        message: 'Sorry, no images found. Try again.',
      });
    } else {
      renderImages(images);
    }
  } catch (error) {
    iziToast.error({
      ...iziToastStyle,
      message: 'Something went wrong, please try again later.',
    });
  } finally {
    hideLoader();
    loadingMessage.style.display = 'none';
    searchButton.disabled = false;
  }
});
