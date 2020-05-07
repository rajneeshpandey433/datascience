/**
 * Created by Ramakrishna on 21-11-2019.
 */

$(document).ready(function() {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function() {
            window.history.pushState(null, "", window.location.href);
        };
});

//Full Name validation -----------------
function allLetter(uname)
{
var letters = /^[A-Za-z ]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Full name must have alphabet characters only');
uname.focus();
return false;
}
}

//Signum Validation ---------
function signumValidation(signum)
{
if(signum.value.toLowerCase().startsWith("e") && signum.value.length==7)
{
return true;
}
else
{
alert('Input valid Signum');
signum.focus();
return false;
}
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var manageradiorel = "";

//Login Form submit click---------------
 $("#login_form").submit(function(e){
       e.preventDefault();
       manageradiorel = $("input:radio[name ='gender']:checked").val();

       if(allLetter(document.forms["login_form"]["fullname"])){
       if(signumValidation(document.forms["login_form"]["signumname"])){

        $.post("/quiz/dashboard/",
           {
               fullname : document.forms["login_form"]["fullname"].value,
               signumname : document.forms["login_form"]["signumname"].value,
               email : document.forms["login_form"]["email"].value,
               gender : manageradiorel,
               exp : document.forms["login_form"]["exp"].value,
               csrfmiddlewaretoken : document.forms["login_form"]["csrfmiddlewaretoken"].value
           },
           function(data,status)
           {
               window.location.href="/quiz/dashboard/";
           }
       );
       }
       }
 });

var val1="";
var val2="";
var val3="";
var val4="";

 $("#dash_form").submit(function(e){
      e.preventDefault();
        if (document.forms["dash_form"]["abcId"].value == "6/") {
         $.post("/quiz/chart/",
           {
               choice1 : val1,
               choice2 : val2,
               choice3 : val3,
               points : document.getElementById('lbl_point').innerHTML,
               csrfmiddlewaretoken : document.forms["dash_form"]["csrfmiddlewaretoken"].value
           },
           function(data,status)
           {
               window.location.href="/quiz/chart/";
           }
       );
        }else{
        if(document.getElementById("div21").childNodes.length == 0){
            document.getElementById("div21").style["border"] = "2px solid red";
       }else if(document.getElementById("div22").childNodes.length == 0){
            document.getElementById("div22").style["border"] = "2px solid red";
       }else if(document.getElementById("div23").childNodes.length == 0){
            document.getElementById("div23").style["border"] = "2px solid red";
       }else{

        $.post("/quiz/question/",
           {
               choice1 : val1,
               choice2 : val2,
               choice3 : val3,
               points : document.getElementById('lbl_point').innerHTML,
               image : document.getElementById("image_data").value,
               csrfmiddlewaretoken : document.forms["dash_form"]["csrfmiddlewaretoken"].value
           },
           function(data,status)
           {
                 $("#progress-bar").css("width", "48%");
                $("#progress-bar").attr("aria-valuenow", "48%");
               window.location.href="/quiz/question/";
           }
       );
       }
       }
 });

 function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop1(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById("div21").childNodes.length == 0){
     document.getElementById("div21").style["border"] = "1px dashed grey";
    val1 = document.getElementById(data).alt;
  ev.target.appendChild(document.getElementById(data));
    document.getElementById("div"+data.substring(4)).style["border"] = "1px solid #0082F0";
  }
}

function drop2(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById("div22").childNodes.length == 0){
   document.getElementById("div22").style["border"] = "1px dashed grey";
  val2 = document.getElementById(data).alt;
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("div"+data.substring(4)).style["border"] = "1px solid #0082F0";
 }
}

function drop3(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById("div23").childNodes.length == 0){
   document.getElementById("div23").style["border"] = "1px dashed grey";
  val3 = document.getElementById(data).alt;
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("div"+data.substring(4)).style["border"] = "1px solid #0082F0";
  }
}

function drop11(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById(data).id.toString()=="drag11"){
     ev.target.appendChild(document.getElementById(data));
     document.getElementById("div11").style["border"] = "none";
  }
}

function drop12(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById(data).id.toString()=="drag12"){
     ev.target.appendChild(document.getElementById(data));
     document.getElementById("div12").style["border"] = "none";
  }
}

function drop13(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById(data).id.toString()=="drag13"){
     ev.target.appendChild(document.getElementById(data));
     document.getElementById("div13").style["border"] = "none";
  }
}

function drop14(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById(data).id.toString()=="drag14"){
     ev.target.appendChild(document.getElementById(data));
     document.getElementById("div14").style["border"] = "none";
  }
}

function drop15(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById(data).id.toString()=="drag15"){
     ev.target.appendChild(document.getElementById(data));
     document.getElementById("div15").style["border"] = "none";
  }
}

function drop16(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(document.getElementById(data).id.toString()=="drag16"){
     ev.target.appendChild(document.getElementById(data));
     document.getElementById("div16").style["border"] = "none";
  }
}


 function validation(data1, data2, data3){
    if(data1==0){
        return false;
    }else if(data2==0){
     return false;
    }else if(data3==0){
     return false;
    }else{
     return true;
    }
}


// Get the modal
var modal = document.getElementById("myModal");
var letsgo_btn = document.getElementById("letsgo_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

letsgo_btn.onclick = function() {
  modal.style.display = "none";
}

var modal1 = document.getElementById("myModal1");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }else if (event.target == modal1) {
    modal1.style.display = "none";
    var el = document.getElementById('lbl_point');
    text = (el.innerText || el.textContent);
    document.getElementById('lbl_point').innerHTML = +text+10;
     document.getElementById('myBtn').disabled = true;
  }
}

// Get the modal
var close_btn = document.getElementById("close_btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
  var el = document.getElementById('lbl_point');
  text = (el.innerText || el.textContent);
  document.getElementById('lbl_point').innerHTML = +text+10;
  document.getElementById('myBtn').disabled = true;
}

close_btn.onclick = function() {
  modal1.style.display = "none";
  var el = document.getElementById('lbl_point');
  text = (el.innerText || el.textContent);
  document.getElementById('lbl_point').innerHTML = +text+10;
  document.getElementById('myBtn').disabled = true;
}

function openNav() {
  modal1.style.display = "block";
}