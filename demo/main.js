if (window.DeviceMotionEvent) {
	document.getElementById("#foo").innerText = "Supported!";
} else {
	document.getElementById("#foo").innerText = "ble!";

}