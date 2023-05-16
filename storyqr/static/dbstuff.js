export function loadDB() {
    return new Promise((resolve) => {
      let http = new XMLHttpRequest();
      http.open("GET", "db.json", true);
      http.send();
      http.onload = function () {
        if (http.status == 200) {
         const db = JSON.parse(http.responseText);
          return resolve(db);
        }
      };
    });
  }

