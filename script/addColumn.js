$(document).ready(function () {
$("#add-column").click(function(event){
event.preventDefault();
var name=$("#new-column-name").val();
var title=makeColTitle(name, " ");
name = name.replace(" ","_").toLowerCase();

$.ajax({
    url:'php/addColumn.php',
    type:"POST",
    data:{
      name:name,
    },
    success:function(result){
      if(result == "ok")
      {
        $("#operation-col-title").before("<th>" + title + "</th>");
        $(".operation").before("<td></td>");
      }
      else
        console.log(result);
    }
                
    });
  });
});
