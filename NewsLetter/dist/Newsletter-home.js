"use strict";console.log("RODNDAN");var newsletterForm=document.querySelector(".container_form"),formSubmit=function(e){e.preventDefault();var t=localStorage.getItem("email"),r=document.querySelector(".container_form-name").value,o=document.querySelector(".container_form-email").value,e=document.querySelector(".container_form button");if(t&&t===o)return e.classList.add("error"),e.innerText="Email já cadastrado",void(e.disabled=!0);localStorage.setItem("name",r),localStorage.setItem("email",o),e.classList.add("sucess"),e.innerText="Cadastro feito com sucesso!",e.disabled=!0};newsletterForm.addEventListener("submit",formSubmit);