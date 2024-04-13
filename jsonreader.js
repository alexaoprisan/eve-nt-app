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
    <h6 class="card-subtitle mb-2 text-body-secondary">Wann: ${event.dateFrom} bis ${event.dateTo}</h6>
     <h6 class="card-subtitle mb-2 text-body-secondary">Wo: ${event.location}</h6>
    <p class="card-text">Kategorie: ${event.tag}</p>
    <p class="card-text">Free: ${event.free}</p>
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
