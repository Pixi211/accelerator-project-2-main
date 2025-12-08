// export function initializeForm() {
//   const inputs = document.querySelectorAll('.subscription-form__input');

//   inputs.forEach((input) => {
//     input.addEventListener('focus', function() {
//       this.placeholder = this.getAttribute('data-placeholder');
//     });

//     input.addEventListener('blur', function() {
//       if (!this.value) {
//         this.placeholder = this.id === 'phone' ? 'Телефон' : 'E-mail';
//       }
//     });
//   });
// }
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
