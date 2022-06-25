const csvtojson = require("csvtojson");
const fs = require("fs");

const pathtocsv = "file_name.csv";

csvtojson({
  delimiter: [",", ";"],
  colParser: {
    "date_evenement.date": (item) => {
      let items = item.split(";");

      console.log(items);
      return items;
    },
  },
})
  .fromFile(pathtocsv)
  .then((json) => {
    fs.writeFileSync("fnac_data.json", JSON.stringify(json, 0, 4), (err) => {
      if (err) throw err;
    });
    console.log("CSV was successfully created !");
  });
