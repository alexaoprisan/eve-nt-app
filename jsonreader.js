fetch("Events.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let htmlElements = data.events.map((event) => {
      return `<div class="row mb-2">
          <div class="col">
<div class="card border border-4 border-primary" style="width: 18rem;">
  <div class="card-body bg-light rounded">
    <h5 class="card-title">${event.title}</h5>
    <h6 class="card-subtitle mb-2"><strong>Wann: </strong> ${event.date}</h6>
     <h6 class="card-subtitle mb-2"> <strong>Wo: </strong>${event.location}</h6>
    <h6 class="card-text"><strong>Kategorie: </strong>  ${event.type}</h6>
    <h6 class="card-text"><strong>Gratis: </strong>  ${event.isCost}</h6>
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
  data.reverse();
  let htmlElementsLocal = data.map((event) => {
    return `<div class="row mb-2">
        <div class="col">
<div class="card border border-4 border-primary" style="width: 18rem;">
  <div class="card-body bg-light rounded">
    <h5 class="card-title">${event.title}</h5>
    <h6 class="card-subtitle mb-2 "><strong>Wann: </strong> ${event.date}</h6>
     <h6 class="card-subtitle mb-2 "><strong>Wo: </strong> ${event.location}</h6>
    <h6 class="card-text"><strong>Kategorie: </strong> ${event.type}</h6>
    <h6 class="card-text"> <strong>Free: </strong>${event.isCost}</h6>
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
