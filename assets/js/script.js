    function backgroundColorEdit(){
        //get row and for each row compare the time and change the color
        var rowcounter =document.getElementsByClassName("row");
        Array.from(rowcounter).forEach(row => {
           var rowid = row.id;
           var currentTime = moment().format('H');
           var rowTime = parseInt(rowid);
           //check timne with the moment api, if current time equals displayed timeid, then display in current color gray
           if(currentTime==rowTime){
            //document.getElementById(rowid).innerHTML="current";
            document.getElementById(rowid).style.backgroundColor = "#ff6961";
            document.getElementById(rowid).style.color = "white";
           }
           //check time with moment api, if current timne smaller than displayed timeid, then display in future color green
           else if(currentTime<rowTime){
            //document.getElementById(rowid).innerHTML="future";
            document.getElementById(rowid).style.backgroundColor = "#77dd77";
            document.getElementById(rowid).style.color = "white";
           }
           //check time with moment api,if current timne larger than displayed timneid, then display in past color red
           else{
           // document.getElementById(rowid).innerHTML="past";
           document.getElementById(rowid).style.backgroundColor = "#d3d3d3";
            document.getElementById(rowid).style.color = "white";
           }

            });
               
}
// call the function for the function to work
backgroundColorEdit();
/**  */
//current time
function DisplayDate()
{
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(date);
    $("#currentDay").text(date);
}
DisplayDate();

/**save the schedule after click onto the save button */
var time0amInput = $("#0amInput");
var time1amInput = $("#1amInput");
var time2amInput = $("#2amInput");
var time3amInput = $("#3amInput");
var time4amInput = $("#4amInput");
var time5amInput = $("#5amInput");
var time6amInput = $("#6amInput");
var time7amInput = $("#7amInput");
var time8amInput = $("#8amInput");
var time9amInput = $("#9amInput");
var time10amInput = $("#10amInput");
var time11amInput = $("#11amInput");
var time12pmInput = $("#12pmInput");
var time1pmInput = $("#1pmInput");
var time2pmInput = $("#2pmInput");
var time3pmInput = $("#3pmInput");
var time4pmInput = $("#4pmInput");
var time5pmInput = $("#5pmInput");
var time6pmInput = $("#6pmInput");
var time7pmInput = $("#7pmInput");
var time8pmInput = $("#8pmInput");
var time9pmInput = $("#9pmInput");
var time10pmInput = $("#10pmInput");
var time11pmInput = $("#11pmInput");

$(".saveBtn").on("click", function(event) {
    console.log(time0amInput.val());
    
 
    localStorage.setItem("9am",(time9amInput.val()));
    localStorage.setItem("10am",(time10amInput.val()));
    localStorage.setItem("11am",(time11amInput.val()));
    localStorage.setItem("12pm",(time12pmInput.val()));
    localStorage.setItem("1pm",(time1pmInput.val()));
    localStorage.setItem("2pm",(time2pmInput.val()));
    localStorage.setItem("3pm",(time3pmInput.val()));
    localStorage.setItem("4pm",(time4pmInput.val()));
    localStorage.setItem("5pm",(time5pmInput.val()));
  
})
/**display schedule when refresh */
function displaySchedule(){
 
$("#9amInput").append(localStorage.getItem("9am"));
$("#10amInput").append(localStorage.getItem("10am"));
$("#11amInput").append(localStorage.getItem("11am"));
$("#12pmInput").append(localStorage.getItem("12pm"));
$("#1pmInput").append(localStorage.getItem("1pm"));
$("#2pmInput").append(localStorage.getItem("2pm"));
$("#3pmInput").append(localStorage.getItem("3pm"));
$("#4pmInput").append(localStorage.getItem("4pm"));
$("#5pmInput").append(localStorage.getItem("5pm"));
}
displaySchedule();