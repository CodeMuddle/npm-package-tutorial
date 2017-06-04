let google2 = require('googleapis');
let authentication2 = require('./authentication');


export function addSheet(auth: any) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.create({
    auth: auth,
    resource: {
        properties:{
            title: 'Anything-you-name'
        }
    }
  }, (err: Error, response: any) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
        console.log('Added');
    }
  });
}

authentication.authenticate().then((auth: any) => {
    addSheet(auth);
});