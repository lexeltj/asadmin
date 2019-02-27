function readTextFile(file)
{
     var rawFile = new XMLHttpRequest();
     rawFile.open("GET", file, false);
     rawFile.onreadystatechange = function ()
     {
         if(rawFile.readyState === 4)
         {
             if(rawFile.status === 200 || rawFile.status == 0)
             {
                 var allText = rawFile.responseText;
                 alert(allText);
                 //return(allText);
                 setInterval(function(){ document.show.board.value += daten1; }, 3000);
             }
         }
     }
     rawFile.send(null);
}
var daten = "hallo\n";
//status_hc1.txt
// http://server.bw-armaclan.de:8080/admin/hc1_status.txt
var daten1 = readTextFile("http://server.bw-armaclan.de:8080/admin/hc1_status.txt"); //hc1_status.txt
