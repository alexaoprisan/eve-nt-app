fetch("Events.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let htmlElements = data.events.map((event) => {
      return `<div class="row mb-2">
          <div class="col">
<div class="card" style="width: 18rem;">
  <div class="card-body bg-success rounded">
    <h5 class="card-title">${event.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Wann: ${event.date}</h6>
     <h6 class="card-subtitle mb-2 text-body-secondary">Wo: ${event.location}</h6>
    <p class="card-text">Kategorie: ${event.type}</p>
    <p class="card-text">Free: ${event.isCost}</p>
    <a href="#" class="card-link">Event Link</a>
   
  </div>
</div>
          </div>
          </div>`;
    });

    document.querySelector(".favoritenliste").innerHTML = htmlElements.join("");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

let data = JSON.parse(localStorage.getItem("events"));
console.log(data);
if (data) {
  let htmlElementsLocal = data.map((event) => {
    return `<div class="row mb-2">
        <div class="col">
<div class="card" style="width: 18rem;">
  <div class="card-body bg-success rounded">
    <h5 class="card-title">${event.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Wann: ${event.date}</h6>
     <h6 class="card-subtitle mb-2 text-body-secondary">Wo: ${event.location}</h6>
    <p class="card-text">Kategorie: ${event.type}</p>
    <p class="card-text">Free: ${event.isCost}</p>
    <a href="#" class="card-link">Event Link</a>
   
  </div>
</div>
        </div>
        </div>`;
  });

  document.querySelector(".localstorageListe").innerHTML =
    htmlElementsLocal.join("");
} else {
  console.error("No data in local storage");
}
