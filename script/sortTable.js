function sortTable(event) {
    var targetCol = event.data.th;
    var newOrder = "ASC";
    var isTargetSorted = false; // True if the target column was previously sorted

    // Negates the sorting order when the target was previosly sorted
    if(targetCol.attr("sort-order"))
    {  
       isTargetSorted = true;
       if (targetCol.attr("sort-order") == "ASC")
          newOrder = "DESC";
       else
          newOrder = "ASC";
       
    }
    
    $.ajax({
        url:'php/sortTable.php',
        type:"POST",
        data:{ col : event.data.col,
               order: newOrder},
        success:function(result){
            var symbols  = { "ASC": "down", "DESC" : "up"};
            var obj = $.parseJSON(result);
            if(obj.status == "ok")
            {   
                // the old sorted column                                                 
                sortedCol = $("th:not(#operation-col-title)[sort-order!='']");           
                
                // checks if any other columns is sorted
                if(sortedCol.length != 0)     
                {   
                    sortedCol.children().children(':hidden').show();
                    
                    // hides the icon of the previous order
                    if(isTargetSorted)
                        targetCol.find("." + symbols[targetCol.attr("sort-order")]).hide();
                    else
                        targetCol.find(".up").hide();
                    // marks the old column to be unsorted                         
                    sortedCol.attr("sort-order",''); 
                }
                else if(!isTargetSorted)
                    targetCol.find(".up").hide();
                
                // marks the target column to be sorted with newOrder
                targetCol.attr("sort-order", newOrder);
                
                container = $("#pianists-table-content");
                container.empty();
                var row; 

                for (var i = 0; i < obj.result.length; i++)
                {
                    row = $("<tr>", {id: obj.result[i][0]});
                    for (var colIndex = 1; colIndex < obj.result[i].length; colIndex++)
                    {   
                        col = $("<td>"); 
                        var input = $("<input>", {type: "text",
						class : obj.columns[colIndex -1], 
						value: obj.result[i][colIndex], 
						placeholder: obj.result[i][colIndex]});
	          		col.append(input);
		        	row.append(col);
                    }
                        //Column for Operation (containing buttons)
                        col = $("<td>", {class:'operation'});
                        
                        //Button for Delete
                        var button = $("<button>", {class: 'delete'});
                        button.text("Delete");
                        button.on("click", {id: obj.result[i][0], tr : row}, deleteItem);
                        col.append(button);
                        
                        //Button for Update
                        button = $("<button>", {class: 'update'});
                        button.text("Update");
                        button.on("click", {id: obj.result[i][0], tr : row}, updateItem);
			col.append(button);

                        row.append(col);

                    container.append(row);
                }
            }
            else
                console.log('Failed to sort the data.');
        }

    });

}

