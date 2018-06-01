function deleteItem(event){
    var trId = event.data.id;
    $.ajax({
        url:'php/delete.php',
        type:"POST",
        data:{
            id: trId
        },
        success: function(result){
          if(result == 'ok')
            event.data.tr.remove();
          else
            alert("The deletion failed.");
        }
    });
}
