function DisplayDate()
{
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(date);
    $("#currentDay").text(date);
}
DisplayDate();