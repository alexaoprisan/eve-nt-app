const data = fs.readFileSync('Events.json');

const jsonData = JSON.parse(data);

// Modify the JavaScript object by adding new data
jsonData.event.push(
  {
    "events": [
      {
        "title": "Helene Fischer",
        "dateFrom": "20240415 T 19:00:00",
        "dateTo": "20240415 T 22:00:00",
        "location": "Stadthalle Wien",
        "tag": "Konzert",
        "free": "true/false"
      },
      {
        "title": "Dune 2",
        "dateFrom": "20240417 T 20:00:00",
        "dateTo": "20240417 T 23:00:00",
        "location": "Artis Cinema",
        "tag": "Kino",
        "free": "true/false"
      },
      {
        "title": "Adele",
        "dateFrom": "20240422 T 20:00:00",
        "dateTo": "20240422 T 23:00:00",
        "location": "Prater Stadion",
        "tag": "Konzert",
        "free": "true/false"
      },
      {
        "title": "Food Festival",
        "dateFrom": "20240425 T 11:00:00",
        "dateTo": "20240425 T 19:00:00",
        "location": "Museumsquartier",
        "tag": "Konzert",
        "free": "true/false"
      },
      {
        "title": "Die coolsten Mineralien",
        "dateFrom": "20240428 T 11:00:00",
        "dateTo": "20240428 T 13:00:00",
        "location": "Naturhistorisches Museum",
        "tag": "Kurs",
        "free": "true/false"
      },
      {
        "title": "Kräuterwanderung",
        "dateFrom": "20240430 T 09:30:00",
        "dateTo": "20240430 T 13:00:00",
        "location": "Naturpark Lobau",
        "tag": "Kurs",
        "free": "true/false"
      },
      {
        "title": "Quidditch Match",
        "dateFrom": "20240505 T 10:00:00",
        "dateTo": "20240415 T 13:00:00",
        "location": "Prater Stadion",
        "tag": "Sport",
        "free": "true/false"
      }
    ]
  }

);

// Convert the JavaScript object back into a JSON string
const jsonString = JSON.stringify(jsonData);


fs.writeFileSync('Events.json', JSON.stringify(jsonData));


const update_data = fs.readFileSync('Events.json');
const updated_jsonData = JSON.parse(update_data);
console.log("After Adding data", JSON.stringify(updated_jsonData, null, 4));