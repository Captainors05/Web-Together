
document.addEventListener("DOMContentLoaded", () => {
  const formTitle = document.querySelector(".form-section h3");
  const textToType = formTitle.textContent;
  formTitle.textContent = "";

  let index = 0;
  function typeEffect() {
    if (index < textToType.length) {
      formTitle.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  // Apparition des éléments du formulaire
  const formElements = document.querySelectorAll(
    "#friendForm label, #friendForm input, #friendForm textarea, #friendForm button"
  );

  formElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateX(-30px)";
    el.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
  });

  window.addEventListener("load", () => {
    formElements.forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "translateX(0)";
    });
  });

  // Bouton animations : hover et clic
  const btn = document.querySelector("form button");

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-5px)";
    btn.style.boxShadow = "0 8px 15px rgba(0, 123, 255, 0.3)";
    btn.style.transition = "all 0.3s ease";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
    btn.style.boxShadow = "none";
  });

  btn.addEventListener("mousedown", () => {
    btn.style.transform = "translateY(2px)";
    btn.style.boxShadow = "none";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "translateY(-5px)";
    btn.style.boxShadow = "0 8px 15px rgba(0, 123, 255, 0.3)";
  });

  // Gestion du formulaire
  const form = document.getElementById("friendForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const prenom = form.prenom.value.trim();
    const interets = form.interets.value.trim();
    const message = form.message.value.trim();

    if (prenom && interets && message) {
      result.textContent = `Merci ${prenom} ! Nous cherchons un groupe qui correspond à tes centres d'intérêt : "${interets}".\nTon message : "${message}"`;
      result.classList.add("visible");
      result.style.color = "green";

      setTimeout(() => {
        result.classList.remove("visible");
        result.textContent = "";
      }, 7000);

      form.reset();
    } else {
      result.textContent = "Veuillez remplir tous les champs.";
      result.style.color = "red";
      result.classList.add("visible");
    }
  });

  // Animation de Fade-In pour les Sections
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    
    sections.forEach((section, index) => {
      section.style.opacity = 0; // Initialiser l'opacité à 0
      section.style.transform = "translateY(20px)"; // Déplacer vers le bas
      section.style.transition = "opacity 0.5s ease, transform 0.5s ease"; // Définir la transition

      // Ajouter un délai pour chaque section
      setTimeout(() => {
        section.style.opacity = 1; // Rendre visible
        section.style.transform = "translateY(0)"; // Remettre à la position d'origine
      }, index * 300); // Délai basé sur l'index
    });

    // Animation de Typage pour le Titre du Formulaire
    const formTitle = document.querySelector(".form-section h3");
    const textToType = formTitle.textContent;
    formTitle.textContent = "";

    let index = 0;
    function typeEffect() {
      if (index < textToType.length) {
        formTitle.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Délai entre chaque lettre
      }
    }
    typeEffect();
  });

  // Animation de Hover sur les Boutons
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)"; // Agrandir légèrement le bouton
      button.style.transition = "transform 0.3s ease"; // Définir la transition
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)"; // Rétablir la taille d'origine
    });
  });


});
