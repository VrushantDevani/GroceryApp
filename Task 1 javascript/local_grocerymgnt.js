//Add the row in a table
let i = 0;
function addRow(){
	let tableId = "tableRow_" + i++; 

	console.log("tableId =>"+tableId);  

	var itemNumber = document.getElementById('inputNumber').value.trim();
	var inputName = document.getElementById('inputName').value.trim();
	var itemDate = document.getElementById('inputDate').value.trim();
	var selectItem = document.getElementById('selectData').value.trim();
	
	if((itemNumber != "") && (inputName != "") && (itemDate != "") && (selectItem != "")){
	
		console.log("itemNumber ==> "+itemNumber);
		console.log("inputName ==> "+inputName);
		console.log("itemDate ==> "+itemDate);
		console.log("selectItem ==> "+selectItem);
		
		var rowData = document.getElementById('tableData');
		rowData.innerHTML += `
			<tr id = ${tableId}>
				<td>${itemNumber}</td>
				<td>${inputName}</td>
				<td>${itemDate}</td>
				<td>${selectItem}</td>
				<td>
					<button class = "ed" onclick = "editRow(this)">Edit</button>
					<button class = "er" id = "delet" onclick = "deleteData(this)">Delete</button>
				</td>
			</tr>
		`
		resetData();
	}
	else{
		 validateField('inputNumber','numberErr','Item No.:');
		 validateField('inputName','nameErr','Item Name:');
		 validateField('inputDate','dateErr','Purchase Date:');
		 validateField('selectData','quaErr','Quantity:');
	}
}



//Edit the raw

function editRow(td){
	let editData = td.parentElement.parentElement;
	
	document.getElementById('inputNumber').value = editData.cells[0].innerHTML;
	document.getElementById('inputName').value = editData.cells[1].innerHTML;
	document.getElementById('inputDate').value = editData.cells[2].innerHTML;
	document.getElementById('selectData').value = editData.cells[3].innerHTML;
	
	document.getElementById('saveButton').innerHTML = "Update";
	rawId1 = editData.getAttribute("id");
	document.getElementById('saveButton').setAttribute("onclick", "updateData("+rawId1+")");
	
	document.getElementById('numberErr').innerHTML = "";
	document.getElementById('nameErr').innerHTML = "";
	document.getElementById('dateErr').innerHTML = "";
	document.getElementById('quaErr').innerHTML = "";
}



//Update data 
function updateData(editData){
	
	console.log("editData =>"+editData);
	
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
		//console.log('update');
		validateField('inputNumber','numberErr','Item No.:');
		validateField('inputName','nameErr','Item Name:');
		validateField('inputDate','dateErr','Purchase Date:');
		validateField('selectData','quaErr','Quantity:');
	}
	
}



//Delete data
/*function deleteData(td){

	let del = document.getElementById('saveButton').onclick.toString();
	console.log("del =>"+del);
		
	if(del.match('addRow') == 'addRow'){
		del = null;
		
	}else {
		console.log("upd "+del);
		del = del.split("updateData(")[1].replace(")\n}","");
		console.log("upd 1 "+del);
	}
	
	if(confirm("Are you sure to delete the data")){
		var raw = td.parentElement.parentElement;
		console.log(del);
		var RowId = raw.getAttribute('id');
	console.log("Row =>  "+RowId);
		raw.remove();
		if(del != null){
			console.log("upd 1 ");
			if(RowId === del){
				console.log("reset" );
			resetData();
			}	
		}
		
		
	}	
	
}*/

function deleteData(editData){
	if(confirm('Are you sure to delete the data?')){
		var raw = editData.parentElement.parentElement;
		let rawId = raw.getAttribute('id');
		
		console.log("rawId => "+rawId);
		
		raw.remove();
		if(rawId == rawId1){
			console.log("resetdata");
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



//resetdata
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