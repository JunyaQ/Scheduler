var currentTime = moment().format('H');
var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;

// if currentTime > hourNow make background color gray//

var hourNow = currentTime;
//var counter =0;
console.log(hourNow)
console.log(currentTime)
function rowcounter(){
    var row = document.getElementsByClassName("row");
    console.log("counter: "+Array.from(row).length);
    
    
}
rowcounter();

    function backgroundColorEdit(){
        //get row and for each row compare the time and change the color
        var rowcounter =document.getElementsByClassName("row");
        Array.from(rowcounter).forEach(row => {
           var rowid = row.id;
           var currentTime = moment().format('H');
           var rowTime = parseInt(rowid);
           if(currentTime==rowTime){
            //document.getElementById(rowid).innerHTML="current";
            document.getElementById(rowid).style.backgroundColor = "#ff6961";
            document.getElementById(rowid).style.color = "white";
           }
           else if(currentTime<rowTime){
            //document.getElementById(rowid).innerHTML="future";
            document.getElementById(rowid).style.backgroundColor = "#77dd77";
            document.getElementById(rowid).style.color = "white";
           }
           else{
           // document.getElementById(rowid).innerHTML="past";
           document.getElementById(rowid).style.backgroundColor = "#d3d3d3";
            document.getElementById(rowid).style.color = "white";
           }

            });
            
           

            
     

        
}
backgroundColorEdit();
/**  */
//backgroundColorEdit();
//displaypresent();
//current time
function DisplayDate()
{
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(date);
    $("#currentDay").text(date);
}
DisplayDate();

