$(document).ready(function () {
    $.ajax({
        url:'php/loadTable.php',
        type:"POST",
        data:{},
        success:function(result){
            var obj = $.parseJSON(result);
            if(obj.status == "ok")
            {
                var container = $("#pianists-titles");
                var col;
                for(var colIndex in obj.columns)
                {
                    col=$("<th>",{class : obj.columns[colIndex], "sort-order": ''});
                    // name of the column
                    var p = $("<p>");
                    p.text(makeColTitle(obj.columns[colIndex], "_"));
                    // "up" icon for sorting
                    p.append($("<i>",{class : "up"}));
                    p[0].innerHTML += " ";
                    // "down" icon for sorting
                    p.append($("<i>",{class : "down"}));
                    col.append(p);
                    col.on("click",{col : obj.columns[colIndex], th : col}, sortTable);
                    container.append(col);
                } 
                col=$("<th>", {id:'operation-col-title'});
                col.text("Item Operation");
                container.append(col);

                container = $("#pianists-table-content");
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
                console.log('Failed to load the data.');
        }

    });

});

