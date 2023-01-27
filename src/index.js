const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!event.target[0].value) return;

    const inputID = event.target[0].id;
    const infoID = event.target.children[1].id;

    const inputElement = document.getElementById(inputID);
    const infoElement = document.getElementById(infoID);

    inputElement.style.borderColor = 'rgba(239, 72, 119, 1)';
    infoElement.style.display = "block";
  });
});