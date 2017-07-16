var template = `
<h1> Internal compay Directory</h1>
<div class = "container" >
`
for (var i = 0; i < customers.results.length; i++) {
  template += `
  <div class = "customer-info">
    <img src="${customers.results[i].picture.large}">
    <div class = "name">
      ${customers.results[i].name.first}
      ${customers.results[i].name.last}
    </div>
    <div class = "email">
      <a href="">${customers.results[i].email}</a>
    </div>
    <div class = "street">
      ${customers.results[i].location.street}
    </div>
    <div class = "city">
      ${customers.results[i].location.city + ", " + customers.results[i].location.state +
      ", " + customers.results[i].location.postcode}
    </div>
    <div class = "phone">
      ${"555-555-5555"}
    </div>
    <div class = "blurred-SSN">
      ${customers.results[i].id.value}
    </div>
  </div> `

}
template += `</div>`;


document.querySelector('body').innerHTML = template


console.log(customers);

// note on PHONE Number - the mockpng has 555-555-5555 pull actual number by using ${customers.results[i].phone}
