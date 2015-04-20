$(document).ready(function() {
    $.getJSON("../capstonePortalUsers.json", function (data) {
        $("#clientName").append(data.Clients.ClientUsers[0].ClientName);
    })
    
     
    function createGroup()
    {  
        var field1 = document.getElementById('teamName').value;
        alert(field1 + ' Capstone Group info has been submitted...');
    } 
});

