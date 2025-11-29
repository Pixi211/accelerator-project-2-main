function addDuplicateTitle() {
  const headers = document.querySelectorAll('.main-title__wrapper h2');

  headers.forEach((header) => {
    if (header.parentElement.querySelector('.main-title--duplicate')) {
      return;
    }
    const duplicate = document.createElement('span');
    duplicate.textContent = header.textContent;
    duplicate.classList.add('main-title--duplicate');
    duplicate.setAttribute('aria-hidden', 'true');

    header.parentElement.style.position = 'relative';
    header.parentElement.appendChild(duplicate);
  });
}


export {addDuplicateTitle};


