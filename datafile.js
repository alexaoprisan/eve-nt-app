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
      <label for="eventTitle">Event Title:</label> <input type="text" id="eventTitle" required><br><br>
      <label for="eventDate">Event Date:</label> <input type="date" id="eventDate" required><br><br>
      <label for="eventLoc">Event Location:</label> <input type="text" id="eventLoc" required><br><br>
      <label for="EventTags">Tags:</label>
      <select name="EventTags" class="EventTags">
        <option value="Konzert">Konzert</option>
        <option value="Foodevent">Foodevent</option>
        <option value="Festivals">Festivals</option>
        <option value="Demo">Demo</option>
        <option value="Kino">Kino</option>
      </select><br><br>
      <label for="eventImage">Upload Image:</label> <input type="file" id="eventImage"><br><br>
      <label for="eventLink">Link:</label> <input type="url" id="eventLink"><br><br>
      <label for="eventDescription">Event Description:</label> <textarea id="eventDescription"></textarea><br><br>
      <label for="eventCost">Paid Event:</label> <input type="checkbox" id="eventCost"><br><br>
      <button id="submitEventButton">Save Event</button>
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
