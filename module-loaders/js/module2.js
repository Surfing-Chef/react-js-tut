var _ = require('lodash');

var people =
[{
  "id": 1,
  "first_name": "Germain",
  "last_name": "Ferby",
  "email": "gferby0@washington.edu",
  "gender": "Male",
  "ip_address": "244.121.67.0"
}, {
  "id": 2,
  "first_name": "Abraham",
  "last_name": "Stoyle",
  "email": "astoyle1@amazon.co.jp",
  "gender": "Male",
  "ip_address": "204.254.75.53"
}, {
  "id": 3,
  "first_name": "Sada",
  "last_name": "Iggalden",
  "email": "siggalden2@statcounter.com",
  "gender": "Female",
  "ip_address": "167.147.189.127"
}, {
  "id": 4,
  "first_name": "Chandal",
  "last_name": "Oldam",
  "email": "coldam3@bluehost.com",
  "gender": "Female",
  "ip_address": "105.53.109.58"
}, {
  "id": 5,
  "first_name": "Hadlee",
  "last_name": "Mourge",
  "email": "hmourge4@baidu.com",
  "gender": "Male",
  "ip_address": "75.139.72.227"
}, {
  "id": 6,
  "first_name": "Mala",
  "last_name": "Leverich",
  "email": "mleverich5@domainmarket.com",
  "gender": "Female",
  "ip_address": "70.43.77.127"
}, {
  "id": 7,
  "first_name": "Seka",
  "last_name": "Finneran",
  "email": "sfinneran6@wsj.com",
  "gender": "Female",
  "ip_address": "205.3.150.157"
}, {
  "id": 8,
  "first_name": "Vicki",
  "last_name": "Valde",
  "email": "vvalde7@chron.com",
  "gender": "Female",
  "ip_address": "118.61.134.166"
}, {
  "id": 9,
  "first_name": "Johny",
  "last_name": "Folkerd",
  "email": "jfolkerd8@jimdo.com",
  "gender": "Male",
  "ip_address": "44.119.68.69"
}, {
  "id": 10,
  "first_name": "Raphael",
  "last_name": "Beare",
  "email": "rbeare9@youtube.com",
  "gender": "Male",
  "ip_address": "75.174.87.68"
}]

var femaleCount = _.filter(people, {gender: "Female"}).length;
alert(femaleCount + ' females!');
