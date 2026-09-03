(() => {
  const form = document.querySelector("[data-acceptance-form]");
  if (!form) return;

  const submit = form.querySelector("button[type='submit']");
  const timestamp = form.querySelector("[data-acceptance-timestamp]");
  const status = form.querySelector("[data-acceptance-status]");
  const required = Array.from(form.querySelectorAll("input[required]"));

  const updateState = () => {
    submit.disabled = !required.every((field) => (
      field.type === "checkbox" ? field.checked : field.value.trim() !== "" && field.validity.valid
    ));
  };

  form.addEventListener("input", updateState);
  form.addEventListener("change", updateState);
  form.addEventListener("submit", () => {
    timestamp.value = new Intl.DateTimeFormat("es-AR", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "America/Argentina/Cordoba",
    }).format(new Date());
    submit.disabled = true;
    status.textContent = "Enviando la conformidad…";
  });

  if (new URLSearchParams(window.location.search).get("aceptacion") === "enviada") {
    status.textContent = "La conformidad fue enviada. Gracias.";
  }

  updateState();
})();
