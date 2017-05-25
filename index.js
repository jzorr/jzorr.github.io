index.jsfunction 
function myEduFunction(){
	var x = document.getElementById('edu');
		if (x.style.display === 'none'){
			x.style.display = 'block';
		}else {
			x.style.display = 'none';
		}
}

function myHisFunction(){
	var x = document.getElementById('his');
		if (x.style.display === 'none'){
			x.style.display = 'block';
		}else {
			x.style.display = 'none';
		}
}

function myProjFunction(){
	var x = document.getElementById('proj');
		if (x.style.display === 'none'){
			x.style.display = 'block';
		}else {
			x.style.display = 'none';
		}
}

function myCertFunction(){
	var x = document.getElementById('cert');
		if (x.style.display === 'none'){
			x.style.display = 'block';
		}else {
			x.style.display = 'none';
		}
}
// the code to have the buttons closed by default is from https://www.sitepoint.com/community/t/hide-then-onclick-show-table-rows/31642/2
// I had to add the style="display:none;" to the div for each button. 