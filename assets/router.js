document.addEventListener("DOMContentLoaded", function() {
  handlePageLoad();

  // Handle navigation clicks
  document.querySelectorAll(".routelink").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const page = this.getAttribute("href").split("=")[1];
      window.history.pushState({ page }, "", `?page=${page}`);
      loadPage(page);
    });
  });

  // Handle browser back/forward navigation
  window.addEventListener("popstate", function(event) {
    const page = event.state ? event.state.page : "home";
    loadPage(page);
  });
});

function handlePageLoad() {
  const page = new URLSearchParams(window.location.search).get("page") || "home";
  loadPage(page);
}

function loadPage(page) {
  fetch(`${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
      document.title = `OFS SPORTS -  ${page}`;
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "<h2>Page not found</h2>";
    });
}
