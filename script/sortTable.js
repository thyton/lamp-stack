function sortTable(event) {
    var targetCol = event.data.th;
    if(targetCol.attr["sort-order"])
    {
       if (targetCol.attr["sort-order"] == "ASC")
        targetCol.attr("sort-order","DESC");
       else 
        targetCol.attr("sort-order","ASC");
    }
    else
    {  
       // the old sorted column 
       sortedCol = $("th:not(#operation-col-title)[sort-order!='']");        
       if(sortedCol.length != 0)                                                         // marks that column to be unsorted
         sortedCol[0].setAttribute("sort-order",'');                                   
       // marks the target column to be sorted ascendingly
       targetCol[0].setAttribute('sort-order', "ASC");              
    }
    
    $.ajax({
        url:'php/sortTable.php',
        type:"POST",
        data:{ col : event.data.col,
               order: targetCol.attr["sort-order"]},
        success:function(result){
            var obj = $.parseJSON(result);
            if(obj.status == "ok")
            {
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

