const url = "https://jsonplaceholder.typicode.com/users";

let tableBody = document.querySelector("tbody");

fetch(url).then((response) => {
  if (response.status === 200) {
    response.json().then((results) => {
      const data = {
        headings: [
          "Name",
          "UserName",
          "Email",
          "Address",
          "Phone",
          "Website",
          "Company",
        ],
        data: results.map((element) => [
          element.name,
          element.username,
          element.email,
          element.phone,
          element.address.street +
            " ," +
            element.address.suite +
            " ," +
            element.address.zipcode +
            " ," +
            element.address.city,
          element.website,
          element.company,
        ]),
      };
      var myTable = document.getElementById("basic");
      var dataTable = new DataTable(myTable, { data });
    });
  }
});
