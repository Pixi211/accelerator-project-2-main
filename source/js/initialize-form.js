export function initializeForm() {
  const inputs = document.querySelectorAll('.subscription-form__input');
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.placeholder = input.dataset.placeholder;
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.placeholder = input.getAttribute('placeholder');
      }
    });
  });
}
