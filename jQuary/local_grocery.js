//Add the row in a table
var i = 0;
function addData(){
	
	i = i+1;
	
		var inputNumber = $("#inputNumber").val().trim();
		var inputName = $("#inputName").val().trim();
		var inputDate = $("#inputDate").val();
		var selectData = $("#selectData").val();
		
	if((inputNumber != "") && (inputName != "") && (inputDate != "") && (selectData != "")){
		
		console.log("inputNumber =>"+inputNumber);
		console.log("inputName =>"+inputName);
		console.log("inputDate =>"+inputDate);
		console.log("selectData =>"+selectData);
		
			$("#tableData").append(`
				<tr id="editDataTable${i}">
					<td>${inputNumber}</td>
					<td>${inputName}</td>
					<td>${inputDate}</td>
					<td>${selectData}</td>
					<td>
						<button class = "ed" id = "es">Edit</button>
						<button class = "er" id = "et" ">Delete</button>
					</td>
				</tr>`);
				
			resetData();	
		
	
	}
	else{
		
		validateField('inputNumber','numberErr','Item No.:');
		validateField('inputName','nameErr','Item Name:');
		validateField('inputDate','dateErr','Purchase Date:');
		validateField('selectData','quaErr','Quantity:');
		
		
	}
}




//editRaw

	$('#tableData').on("click", "#es", function(){
		let editData = $(this).closest("tr");
		console.log(editData);
		editRow = editData.attr("id");
		console.log(editRow);
		
		
		$("#inputNumber").val(editData.find('td:eq(0)').text());
		$("#inputName").val(editData.find('td:eq(1)').text());
		$("#inputDate").val(editData.find('td:eq(2)').text());
		$("#selectData").val(editData.find('td:eq(3)').text());
		
		
		$("#numberErr").text("");
		$("#nameErr").text("");
		$("#dateErr").text("");
		$("#quaErr").text("");
		
		$("#saveButton").html("Update")
		$("#saveButton").attr("onclick", "updateData("+editRow+")");
	});







//Update data
function updateData(editData){
	
	
	var inputNumber = $("#inputNumber").val().trim();
	var inputName = $("#inputName").val().trim();
	var inputDate = $("#inputDate").val();
	var selectData = $("#selectData").val();
	
	
	let raw = editData;
	let raw1 = $(editData).find("td");
	if((inputNumber != "") && (inputName != "") && (inputDate != "") && (selectData != "")){
	
		
		$(raw1).eq(0).text(inputNumber);
		$(raw1).eq(1).text(inputName);
		$(raw1).eq(2).text(inputDate);
		$(raw1).eq(3).text(selectData);
		
		resetData();
	}
	else{
		validateField('inputNumber','numberErr','Item No.:');
		validateField('inputName','nameErr','Item Name:');
		validateField('inputDate','dateErr','Purchase Date:');
		validateField('selectData','quaErr','Purchase Date:');
	}
}
 




//Delete data


	$("#tableData").on("click", "#et", function(){
		
		if(confirm("Are you sure to delete the data?")){
			var deleteData = $(this).closest("tr");
			let raw1 = deleteData.attr("id")
			deleteData.remove();
			if(raw1 == editRow){
				resetData();
			}
		}
		
	});


//validation
function validateField(elementId,errorId,fieldName){
	
	let valid = $(`#${elementId}`).val().trim();
	
	if(valid == ""){
		$(`#${errorId}`).text( "*" + fieldName + " Must be Fild Out");  
	} else {
		$(`#${errorId}`).text("");
	}
}



//reset Data

function resetData(){

	$("#inputNumber").val("");
	$("#inputName").val("");
	$("#inputDate").val("");
	$("#selectData").val("");
	
	
	$("#numberErr").text("");
	$("#nameErr").text("");
	$("#dateErr").text("");
	$("#quaErr").text("");
	
	$("#saveButton").onclick = addData;
	$("#saveButton").text("Save");
}
