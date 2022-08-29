//Add the data
var i = 0;

function addData(){
	
	i = i+1;
	
	let itemNumber = $("#inputNumber").val().trim();
	let itemName = $("#inputName").val().trim();
	let purchaseDate = $("#inputDate").val();
	let quantity = $("#quantity").val();
	
	console.log("itemNumber =>"+inputNumber);
	console.log("itemName =>"+inputName);
	console.log("purchaseDate =>"+inputDate);
	console.log("quantity =>"+quantity);
	
	
	if((itemNumber != "") && (itemName != "") && (purchaseDate != "") && (quantity != "")){
	
			$("#tableData").append(`
				<tr id = "tableRow_${i}">
					<td>${itemNumber}</td>
					<td>${itemName}</td>
					<td>${purchaseDate}</td>
					<td>${quantity}</td>
					<td>
						<button class = "btn btn-link mt-2 shadow-none text-primary" id = "es"><i class="fa fa-pencil-square-o fa-2x"
						aria-hidden="true"></i></button>
						<button class = "btn btn-link mt-2 shadow-none text-danger" data-bs-toggle="modal" data-bs-target="#deleteModel" id = "et"><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>
						<button class = "btn btn-link mt-2 shadow-none text-primary" id = "view" data-bs-toggle="modal" data-bs-target="#viewModel"><i class="fa fa-eye fa-2x" aria-hidden="true"></i></button>
					</td>
				</tr>
			`);
			reseteData();
	}
	else{
		validateFeild('inputNumber', 'errNumber', 'Item No :');
		validateFeild('inputName', 'errName', 'Item Name:');
		validateFeild('inputDate', 'errDate', 'Purchase Date:');
		validateFeild('quantity', 'errQue', 'Quantity:');
	}
	
}



//edit the data
$("#tableData").on("click", "#es", function(){
	editData = $(this).closest("tr");
	
		row = editData.attr("id");
	
		$("#inputNumber").val(editData.find('td:eq(0)').text());
		$("#inputName").val(editData.find('td:eq(1)').text());
		$("#inputDate").val(editData.find('td:eq(2)').text());
		$("#quantity").val(editData.find('td:eq(3)').text());
		
		$("#saveData").html("Update");
		$("#saveData").attr("onclick", "updateData("+row+")");
		
});


//resetData
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


//updateData
function updateData(){
	
	let itemNumber = $("#inputNumber").val().trim();
	let itemName = $("#inputName").val().trim();
	let purchaseDate = $("#inputDate").val();
	let quantity = $("#quantity").val();	
	
	raw = editData;
	raw1 = $(editData).find("td");
	
	if((itemNumber != "") && (itemName != "") && (purchaseDate != "") && (quantity != "")){
			$(raw1).eq(0).text(itemNumber);
			$(raw1).eq(1).text(itemName);
			$(raw1).eq(2).text(purchaseDate);
			$(raw1).eq(3).text(quantity);
	
			reseteData();
	}
	else{
		validateFeild('inputNumber', 'errNumber', 'Item No :');
		validateFeild('inputName', 'errName', 'Item Name:');
		validateFeild('inputDate', 'errDate', 'Purchase Date:');
		validateFeild('quantity', 'errQue', 'Quantity:');
	}
}


//deleteData
$("#tableData").on("click", "#et", function(){
		
		
			 deleteData = $(this).closest("tr");
			/*let raw2 = deleteData.attr("id")
			deleteData.remove();*/
			/*if(raw2 == row){
				reseteData();
			}*/
		
		
	});
	
	
//Delete model

function deletePop(){
	let raw2 = deleteData.attr("id")
			deleteData.remove();
			if(raw2 == row){
				reseteData();
			}
}


//validation
function validateFeild(inputId, errId, inputName){
	
	let valid = $(`#${inputId}`).val();
	
	if(valid == ""){
		$(`#${errId}`).text("*" + inputName + "Must be fill")
	}
	else{
		$(`#${errId}`).text("");
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