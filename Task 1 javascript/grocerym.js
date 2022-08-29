//Add the row in a table
function addRow(){
	var itemNumber = document.getElementById('inputNumber').value.trim();
	var inputName = document.getElementById('inputName').value.trim();
	var itemDate = document.getElementById('inputDate').value.trim();
	var selectItem = document.getElementById('selectData').value.trim();
	
	if((itemNumber != "") && (inputName != "") && (itemDate != "") && (selectItem != "")){
	
		console.log("itemNumber ==>"+itemNumber);
		console.log("inputName ==>"+inputName);
		console.log("itemDate ==>"+itemDate);
		console.log("selectItem ==>"+selectItem);
		
		var rowData = document.getElementById('tableData');
		rowData.innerHTML += `
			<tr>
				<td>${itemNumber}</td>
				<td>${inputName}</td>
				<td>${itemDate}</td>
				<td>${selectItem}</td>
				<td>
					<button class = "ed" id = "es"onclick = "editRow(this)">Edit</button>
					<button class = "er" onclick = "deleteData(this)">Delete</button>
				</td>
			</tr>
		`
		resetData();
		
		
	}
	else {
		 validateField('inputNumber','numberErr','Item No.:');
		 validateField('inputName','nameErr','Item Name:');
		 validateField('inputDate','dateErr','Purchase Date:');
		 validateField('selectData','quaErr','Quantity:');
		
	}
}



//Edit the raw
function editRow(td){
	
	editData = td.parentElement.parentElement;
	console.log("hello");
	document.getElementById('inputNumber').value = editData.cells[0].innerHTML;
	document.getElementById('inputName').value = editData.cells[1].innerHTML;
	document.getElementById('inputDate').value = editData.cells[2].innerHTML;
	document.getElementById('selectData').value = editData.cells[3].innerHTML;
	
	document.getElementById('saveButton').innerHTML = "Update";
	document.getElementById('saveButton').setAttribute('onclick', 'updateData()');
	
	document.getElementById('numberErr').innerHTML = "";
	document.getElementById('nameErr').innerHTML = "";
	document.getElementById('dateErr').innerHTML = "";
	document.getElementById('quaErr').innerHTML = "";
}



//Update data 
function updateData(){
		var itemNumber = document.getElementById('inputNumber').value.trim();
		var inputName = document.getElementById('inputName').value.trim();
		var itemDate = document.getElementById('inputDate').value.trim();
		var selectItem = document.getElementById('selectData').value.trim();
		
	if((itemNumber != "") && (inputName != "") && (itemDate != "") && (selectItem != "")){
		
		editData.cells[0].innerHTML = itemNumber;
		editData.cells[1].innerHTML = inputName;
		editData.cells[2].innerHTML = itemDate;
		editData.cells[3].innerHTML = selectItem;
		
		resetData();
		
	}
	
	else{ 
		validateField('inputNumber','numberErr','Item No.:');
		validateField('inputName','nameErr','Item Name:');
		validateField('inputDate','dateErr','Purchase Date:');
		validateField('selectData','quaErr','Quantity:');
	}
	
}



//Delete data
function deleteData(del){
	if(confirm("Are you sure to delete the data")){
		var raw = del.parentElement.parentElement;
		raw.remove();
		if(raw == editData){
			resetData();
		}
	}
}


//validation
function validateField(elementId,errorId,fieldName){
	
	let valid =  document.getElementById(elementId).value.trim();
	
	if(valid == ""){
		document.getElementById(errorId).innerHTML = "*" + fieldName + " Must be Fild Out";
	} else {
		document.getElementById(errorId).innerHTML = "";
	}
}



//reset data
function resetData(){
	document.getElementById('inputNumber').value = "";
	document.getElementById('inputName').value = "";
	document.getElementById('inputDate').value = "";
	document.getElementById('selectData').value = "";
	document.getElementById('numberErr').innerHTML = "";
	document.getElementById('nameErr').innerHTML = "";
	document.getElementById('dateErr').innerHTML = "";
	document.getElementById('quaErr').innerHTML = "";
	
	document.getElementById('saveButton').onclick = addRow;
	document.getElementById('saveButton').innerHTML = "Save";
}