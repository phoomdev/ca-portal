const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
  let urlValue = req.query.url;

  if (urlValue) {
    if (!urlValue.startsWith('http://') && !urlValue.startsWith('https://')) {
      urlValue = 'http://' + urlValue; // เพิ่มโปรโตคอลถ้าไม่ได้ระบุ
    }

    request.get(urlValue, (error, response) => {
      if (!error && response.statusCode === 200) {
        res.redirect(urlValue);
      } else {
        res.redirect('http://casystem.cayasocoop.or.th/public/offline.html');
      }
    });
  } else {
    res.send('ไม่ได้ระบุ URL');
  }
});

app.listen(3000, () => {
  console.log('เซิร์ฟเวอร์รันที่พอร์ต 3000');
});
