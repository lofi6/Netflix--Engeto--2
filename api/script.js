// Define elements
const filterSelect = document.getElementById("filter");
const resultsDiv = document.getElementById("results");

// Api - movies
filterSelect.addEventListener("change", () => {
  const query = filterSelect.value;
  if (!query) return;

  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => {
      resultsDiv.innerHTML = "";

      data.forEach((item) => {
        const show = item.show;
        const showDiv = document.createElement("div");

        showDiv.innerHTML = `
          ${
            show.image
              ? `<img src="${show.image.medium}" alt="${show.name}">`
              : ""
          }
        `;
        resultsDiv.appendChild(showDiv);
      });
    });
});
