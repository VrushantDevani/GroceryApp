//add Data 
 var table;
 
var i = 0;
 
$(document).ready( function () {
		 table = $('#tableData').DataTable();
		
});

function addData(){	
		

	
		let itemNumber = $("#inputNumber").val();
		let itemName = $("#inputName").val();
		let purchaseDate = $("#inputDate").val();
		let quantity = $("#quantity").val();
		let action = `<button class = "btn btn-link mt-2 shadow-none text-primary" id = "es"><i class="fa fa-pencil-square-o" style = "font-size: 25px"
						aria-hidden="true"></i></button>
						<button class = "btn btn-link mt-2 shadow-none text-danger" data-bs-toggle="modal" data-bs-target="#deleteModel" id = "et"><i class="fa fa-trash-o"  style = "font-size: 25px" aria-hidden="true"></i></button>
						<button class = "btn btn-link mt-2 shadow-none text-primary" id = "view" data-bs-toggle="modal" data-bs-target="#viewModel"><i class="fa fa-eye" style = "font-size: 25px" aria-hidden="true"></i></button>`
						
		
		console.log("itemNumber =>"+itemNumber);
		console.log("itemName =>"+itemName);
		console.log("purchaseDate =>"+purchaseDate);
		console.log("quantity =>"+quantity);
		
	if((itemNumber != "") && (itemName != "") && (purchaseDate != "") && (quantity != "")){
		
		
		
		table1 = [itemNumber,itemName,purchaseDate,quantity,action];

		table.row.add(table1).draw();
		reseteData();
	}
	else{
			validateFeild('inputNumber', 'errNumber', 'Item No :');
			validateFeild('inputName', 'errName', 'Item Name:');
			validateFeild('inputDate', 'errDate', 'Purchase Date:');
			validateFeild('quantity', 'errQue', 'Quantity:');
	}
}  


//resetedData
function reseteData(){
	$("#inputNumber").val("");
	$("#inputName").val("");
	$("#inputDate").val("");
	$("#quantity").val("");
	
	$("#errNumber").text("");
	$("#errName").text("");
	$("#errDate").text("");
	$("#errQue").text("");
	
	$("#saveData").html("Save");
	$("#saveData").onclick = addData;
}



//editData
$("#tableData").on("click", "#es", function(){
		editData = $(this).closest("tr");
		
		value = 
		
		$("#inputNumber").val(editData.find('td:eq(0)').text());
		$("#inputName").val(editData.find('td:eq(1)').text());
		$("#inputDate").val(editData.find('td:eq(2)').text());
		$("#quantity").val(editData.find('td:eq(3)').text());
		
		$("#saveData").html("Update");
		$("#saveData").attr("onclick", "updateData()");
		
});


//Update data

function updateData(){
	
		raw = editData;
		raw1 = $(editData).find("td");
	
		let itemNumber = $("#inputNumber").val();
		let itemName = $("#inputName").val();
		let purchaseDate = $("#inputDate").val();
		let quantity = $("#quantity").val();
		let action = `<button class = "btn btn-link mt-2 shadow-none text-primary" id = "es"><i class="fa fa-pencil-square-o" style = "font-size: 25px"
						aria-hidden="true"></i></button>
						<button class = "btn btn-link mt-2 shadow-none text-danger" data-bs-toggle="modal" data-bs-target="#deleteModel" id = "et"><i class="fa fa-trash-o"  style = "font-size: 25px" aria-hidden="true"></i></button>
						<button class = "btn btn-link mt-2 shadow-none text-primary" id = "view" data-bs-toggle="modal" data-bs-target="#viewModel"><i class="fa fa-eye" style = "font-size: 25px" aria-hidden="true"></i></button>`
		
		let upadate = [itemNumber, itemName, purchaseDate, quantity, action];
		
		if((itemNumber != "") && (itemName != "") && (purchaseDate != "") && (quantity != "")){	

			table.row(editData).data(upadate).draw(false);
			reseteData();
		}
		else{
			validateFeild('inputNumber', 'errNumber', 'Item No :');
			validateFeild('inputName', 'errName', 'Item Name:');
			validateFeild('inputDate', 'errDate', 'Purchase Date:');
			validateFeild('quantity', 'errQue', 'Quantity:');
		}
}


//delete Data
$("#tableData").on("click", "#et", function(){
	
	
		deleteData = $(this).closest('tr');
		
});

function deletePop(){
	
			table.row(deleteData).remove().draw(false);

				if(deleteData[0] == editData[0]){
					reseteData();					
				}
}	


//View Data
$("#tableData").on("click", "#view", function(){
	
		editData1 = $(this).closest("tr");
	
		//row1 = editData1.attr("id");
	
		$("#number").text(editData1.find('td:eq(0)').text());
		$("#name").text(editData1.find('td:eq(1)').text());
		$("#date").text(editData1.find('td:eq(2)').text());
		$("#qua").text(editData1.find('td:eq(3)').text());
		
});


//validation
function validateFeild(inputId, errId, inputName){
	
	let valid = $(`#${inputId}`).val();
	
	if(valid == ""){
		$(`#${errId}`).text("*" + inputName + "Must be fill");
	}
	else{
		$(`#${errId}`).text("");
	}
}
