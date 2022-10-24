function theme() {
  const themeElem = document.querySelector('.js-page');
  const userThemeSaved = localStorage.getItem('theme');

  const setTheme = theme => themeElem.classList.add(theme);

  const changeTheme = () => {
    const newTheme = themeElem.classList.contains('light') ? 'dark' : 'light';

    themeElem.classList.remove('light', 'dark');
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  let userTheme = 'light';

  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (userThemeSaved) {
        return;
      }

      changeTheme();
    });
  }


  const themeButton = document.querySelector('.js-switch');

  themeButton.addEventListener('click', changeTheme);

  setTheme(userTheme);
}

export default theme;
