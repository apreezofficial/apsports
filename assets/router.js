document.addEventListener("DOMContentLoaded", function() {
  handlePageLoad();

  // Handle navigation clicks
  document.querySelectorAll(".routelink").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const page = this.getAttribute("href").split("=")[1];
      window.history.pushState({ page }, "", `?page=${page}`);
      loadPage(page);
      setActiveLink(page); // Set the active link
    });
  });

  // Handle browser back/forward navigation
  window.addEventListener("popstate", function(event) {
    const page = event.state ? event.state.page : "home";
    loadPage(page);
    setActiveLink(page); // Set the active link
  });
});

function handlePageLoad() {
  const page = new URLSearchParams(window.location.search).get("page") || "home";
  loadPage(page);
  setActiveLink(page); // Set the active link on initial load
}

function loadPage(page) {
  fetch(`${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
      document.title = `OFS - ${page}`; // Update the title
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "<h2>Page not found</h2>";
      document.title = "OFS - Page Not Found"; // Update the title for error case
    });
}

function setActiveLink(page) {
  // Remove the red color from all links
  document.querySelectorAll(".routelink").forEach(link => {
    link.style.color = ""; // Reset color to default
  });

  // Set the color of the active link to red
  const activeLink = document.querySelector(`.routelink[href="?page=${page}"]`);
  if (activeLink) {
    activeLink.style.color = "red"; // Set color to red
  }
}