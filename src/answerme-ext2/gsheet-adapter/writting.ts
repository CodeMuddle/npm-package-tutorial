let google = require('googleapis');

import { authentication } from './authentication';

function appendData(auth: any) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: 'yourSpreadSheetIDHere',
    range: 'Sheet1!A2:B', //Change Sheet1 if your worksheet's name is something else
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [ ['Void', 'Canvas', 'Website'], ['Paul', 'Shan', 'Human'] ]
    }
  }, (err: Error, response: any) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
        console.log('Appended');
    }
  });
}

authentication.authenticate().then((auth: any) => {
    appendData(auth);
});
