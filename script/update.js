function updateItem(event){
    var trId = event.data.id;
    var inputs = event.data.tr.find("td").not(".operation");
    var changes = {id: trId};
    for(var i = 0; i < inputs.length; i++)
    {   
        var input = inputs[i].children[0].value;    
           if(input != inputs[i].children[0].placeholder)
           changes[inputs[i].children[0].className] = input;
    }

    $.ajax({
        url:'php/update.php',
        type:"POST",
        data: changes,
        success: function(result){
          if(result == 'ok')
	  {
	      for(var key in changes)
	      {
		if(key !="id")		  
		  {
		var updateInput = "input." + key;
		var updateInput = inputs.find(updateInput)[0]
		updateInput.placeholder = changes[key];
		updateInput.value = changes[key];
              }
	  }
	  }
          else
            alert("The update failed.");
        }
    });;
}

