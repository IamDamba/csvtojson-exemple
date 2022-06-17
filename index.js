const csvtojson = require("csvtojson");

const pathtocsv = "Classeur1.csv";

csvtojson({
  delimiter: [",", ";"],
})
  .fromFile(pathtocsv)
  .then((json) => {
    console.log(json);
  });
