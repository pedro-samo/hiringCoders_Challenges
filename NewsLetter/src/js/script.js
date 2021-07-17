console.log("RODNDAN");

const newsletterForm = document.querySelector(".container_form");

const formSubmit = (event) => {
  event.preventDefault();
  const currentEmail = localStorage.getItem("email");
  const name = document.querySelector(".container_form-name").value;
  const email = document.querySelector(".container_form-email").value;
  const button = document.querySelector(".container_form button");
  if (currentEmail && currentEmail === email) {
    button.classList.add("error");
    button.innerText = "Email já cadastrado";
    button.disabled = true;
    return;
  }
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  button.classList.add("sucess");
  button.innerText = "Cadastro feito com sucesso!";
  button.disabled = true;
};

newsletterForm.addEventListener("submit", formSubmit);
