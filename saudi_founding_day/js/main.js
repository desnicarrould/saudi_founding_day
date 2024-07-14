// Toggle Menu
function menuToggle(){
	const menuToggle = document.getElementById('menuToggle');
	const navigation = document.getElementById('navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
};


// Time & Date (Footer)
setInterval(function(){
document.getEl.ementById('date').innerHTML = Date();
},1000);
