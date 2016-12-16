function busSchedule() {
  var div = document.getElementById('dynamic');
  var content = '';
  var s = bus();

  for (var i = 0; i < s["Union"].length; i++)
    content += '<tr><td>'+ s["Union"][i] +'</td><td>'+ s["Brinsmade"][i] +'</td></tr>';

  div.innerHTML += content;
}

window.onload = busSchedule;
