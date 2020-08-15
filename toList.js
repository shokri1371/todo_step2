function mytodolist() {
  var item = document.getElementById('input').value;
  var eachrow = document.createElement('li');
  var mylist = document.getElementById('list');
  var t = document.createTextNode(item);
  eachrow.appendChild(t);
if (item===""){
alert("pleas insert")
}else{
  document.getElementById('input').value="";
  mylist.appendChild(eachrow);
}
}
            
           
     