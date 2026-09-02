(() => {
  const sidebar = document.querySelector(".sidebar");
  const rootList = sidebar?.querySelector(":scope > ul");
  if (!rootList) return;

  const hiperPath = "/documentation/hiper-n-productividad/";
  if (!rootList.querySelector(`a[href="${hiperPath}"]`)) {
    const section = document.createElement("li");
    section.innerHTML = `
      <details open>
        <summary><a href="${hiperPath}">Hiper(N)productividad</a></summary>
        <ul>
          <li>
            <details open>
              <summary><a href="${hiperPath}casos-de-exito/">Casos de éxito</a></summary>
              <ul>
                <li><a href="${hiperPath}casos-de-exito/colegio-magistratura-santa-fe/">Colegio de la Magistratura de Santa Fe</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>`;
    rootList.append(section);
  }

  const normalizePath = (path) => path.replace(/index\.html$/, "").replace(/\/$/, "");
  const currentPath = normalizePath(window.location.pathname);
  rootList.querySelectorAll("a").forEach((link) => {
    if (normalizePath(new URL(link.href, window.location.origin).pathname) === currentPath) {
      link.classList.add("active");
    }
  });

  const numberList = (list, prefix = [], isRoot = false) => {
    let position = 0;

    [...list.children].forEach((item) => {
      if (!(item instanceof HTMLLIElement)) return;

      const directLink = [...item.children].find((child) => child instanceof HTMLAnchorElement);
      const details = [...item.children].find((child) => child instanceof HTMLDetailsElement);
      const summary = details?.querySelector(":scope > summary");
      const isHome = isRoot && directLink?.getAttribute("href") === "/documentation/";

      if (!isHome) {
        position += 1;
        const parts = [...prefix, position];
        const marker = document.createElement("span");
        marker.className = "nav-number";
        marker.textContent = parts.length === 1 ? `${parts[0]}.` : parts.join(".");
        marker.setAttribute("aria-hidden", "true");

        const label = summary || directLink;
        label?.prepend(marker);

        const childList = details?.querySelector(":scope > ul");
        if (childList) numberList(childList, parts);
      }
    });
  };

  numberList(rootList, [], true);
})();
