let redcount=1;
let bluecount=1;
let greencount=1;
let yellowcount=1;

function RedBlockBegin(){
// add a red block and count + 
console.log("testing");
redcount++;
$(document).ready(function() {

   
    $("#Redcount").html("<p>Red Count:"+redcount+" </p>")
    $("#Redstartingblock").clone().appendTo("#blockcontain")

});
}

function BlueBlockBegin(){
    bluecount++;
    $(document).ready(function() {
    
       
        $("#Bluecount").html("<p>Blue Count:"+bluecount+" </p>")
        $("#Bluestartingblock").clone().appendTo("#blockcontain")
    
    });

}

function GreenBlockBegin(){

    greencount++;
    $(document).ready(function() {
    
       
        $("#Greencount").html("<p>Green Count:"+greencount+" </p>")
        $("#Greenstartingblock").clone().appendTo("#blockcontain")
    
    });

}

function YellowBlockBegin(){

    yellowcount++;
    $(document).ready(function() {
    
       
        $("#Yellowcount").html("<p>Yellow Count:"+yellowcount+" </p>")
        $("#Yellowstartingblock").clone().appendTo("#blockcontain")
    
    });

}

