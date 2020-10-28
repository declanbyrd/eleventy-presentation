/**
 * Toggle the visibility of the theme selector
 */
const themeSwitcher = document.querySelector('.theme-switcher');
const openButton = document.getElementById('themeSwitcherButtonOpen');
const closeButton = document.getElementById('themeSwitcherButtonClose');

openButton.addEventListener('click', () => themeSwitcher.setAttribute('data-visible', true));
closeButton.addEventListener('click', () => themeSwitcher.setAttribute('data-visible', false));


/**
 * Set the colour theme and persist to local storage
 */
let activeTheme = 'default';
const hasLocalStorage = typeof Storage !== 'undefined';

const themeButtons = document.querySelectorAll('button[data-theme-id]');

themeButtons.forEach(button => {
  const id = button.dataset.themeId;
  button.addEventListener('click', () => setTheme(id));
})

const setTheme = id => {
  activeTheme = id;
  document.documentElement.setAttribute('data-theme', id);
  if (hasLocalStorage) {
    localStorage.setItem('theme', id);
  }
}