function addEventField() {
  // Check if the eventForm element already exists in the document
  var eventForm = document.getElementById('eventForm');

  if (!eventForm) {
    // If it doesn't exist, create the event form
    eventForm = document.createElement('div');
    eventForm.id = 'eventForm';
    document.body.appendChild(eventForm); // Append it to the body or any other container element you prefer

    // Set the innerHTML of the eventForm
    eventForm.innerHTML = `
    <section class="h-100 h-custom" style="background-image: url('assets/bg.jpg');">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Event Registration</h3>

            <form class="px-md-3" id="eventForm">
              <div class="form-group mb-3">
                <label for="eventTitle" class="form-label">Event Title:</label>
                <input type="text" id="eventTitle" class="form-control h-25" required>
              </div>
              <div class="form-group mb-3">
                <label for="eventDate" class="form-label">Event Date:</label>
                <input type="date" id="eventDate" class="form-control h-25" required>
              </div>
              <div class="form-group mb-3">
                <label for="eventLoc" class="form-label">Event Location:</label>
                <input type="text" id="eventLoc" class="form-control h-25" required>
              </div>
              <div class="form-group mb-3">
                <label for="EventTags" class="form-label">Tags:</label>
                <select name="EventTags" id="EventTags" class="form-control h-25">
                  <option value="Konzert">Konzert</option>
                  <option value="Foodevent">Foodevent</option>
                  <option value="Festivals">Festivals</option>
                  <option value="Demo">Demo</option>
                  <option value="Kino">Kino</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="eventImage" class="form-label">Upload Image:</label>
                <input type="file" id="eventImage" class="form-control h-25">
                <label for="eventImage" class="file-label">Choose File</label>
              </div>
              <div class="form-group mb-3">
                <label for="eventLink" class="form-label">Link:</label>
                <input type="url" id="eventLink" class="form-control h-25">
              </div>
              <div class="form-group mb-3">
                <label for="eventDescription" class="form-label">Event Description:</label>
                <textarea id="eventDescription" class="form-control h-25"></textarea>
              </div>
              <div class="form-group mb-3">
                <label for="eventCost" class="form-label">Paid Event:</label>
                <input type="checkbox" id="eventCost" class="form-check-input">
              </div>
              <button type="submit" id="submitEventButton" class="btn btn-primary">Save Event</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

    // Attach event listener to the "Save Event" button
    document
      .getElementById('submitEventButton')
      .addEventListener('click', submitEvent);
  } else {
    // If the eventForm already exists, just make it visible
    eventForm.style.display = 'block';
  }
}

function submitEvent() {
  var title = document.getElementById('eventTitle').value;
  var date = document.getElementById('eventDate').value;
  var location = document.getElementById('eventLoc').value;
  var type = document.querySelector('.EventTags').value;
  var description = document.getElementById('eventDescription').value;
  var link = document.getElementById('eventLink').value;
  var isCost = document.getElementById('eventCost').checked;
  var image = document.getElementById('eventImage').files[0]; // Uploaded image

  var event = {
    title: title,
    date: date,
    location: location,
    type: type,
    description: description,
    link: link,
    isCost: isCost,
    image: image,
  };

  // Retrieve existing events from localStorage or initialize an empty array
  var events = JSON.parse(localStorage.getItem('events')) || [];

  // Add the new event to the array
  events.push(event);

  // Store the updated events array back to localStorage
  localStorage.setItem('events', JSON.stringify(events));

  // Display a confirmation message
  alert('Event has been saved successfully');

  // Optionally, reset the form fields after submission
  resetForm();
}

function resetForm() {
  // Reset input fields manually
  document.getElementById('eventTitle').value = '';
  document.getElementById('eventDate').value = '';
  document.getElementById('eventLoc').value = '';
  document.querySelector('.EventTags').selectedIndex = 0; // Reset select element
  document.getElementById('eventImage').value = ''; // Reset file input
  document.getElementById('eventLink').value = '';
  document.getElementById('eventDescription').value = '';
  document.getElementById('eventCost').checked = false;
}

document.getElementById('btnAddEvent').addEventListener('click', addEventField);
