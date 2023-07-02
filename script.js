function volume_sphere() {

  var radius = parseFloat(document.getElementById("radius").value);

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  document.getElementById("volume").value = volume;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
