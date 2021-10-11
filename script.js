var consultant = {
  name:"",
  regNumber:"",
  location:"",
  date:"",
  station:""
}

function book() {
  consultant.name = document.getElementById("name").value;
  consultant.regNumber = document.getElementById("reg").value;
  var select = document.getElementById("location");
  consultant.location = select.options[select.selectedIndex].text;
  consultant.date = document.getElementById("date").value;
  var radio = document.getElementsByName("seat");
  for (var i = 0; i < radio.length; i++){
    if (radio[i].checked) {
      consultant.station = radio[i].value;
      break;
    }
  }
  console.log(consultant)
}