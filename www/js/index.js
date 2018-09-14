document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
		document.getElementById("btn1").addEventListener("click",cameraTakePicture);
		document.getElementById("btn2").addEventListener("click",scanBarCode);
	function cameraTakePicture(){
		alert("camera is starting");
		alert("camera :" +navigator.camera);
		alert("camera :"+ navigator.camera.getPicture);
						navigator.camera.getPicture(onSuccess, onFail, {  
						  quality: 50, 
						  destinationType: Camera.DestinationType.DATA_URL 
					   }); 
		}			    
						function onSuccess(imageData) { 
						  alert('sucess');
						  var image = document.getElementById('myImage'); 
						  image.src = "data:image/jpeg;base64," + imageData; 
					   } 
						function onFail(message) { 
						  alert('Failed because: ' + message); 
					   }

	function scanBarCode(){
		alert('barcode scanner is starting');
		cordova.plugins.barcodeScanner.scan(function (result) {
          alert("Barcode found\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }
      function (error) {
          alert("you need to download barcodescanner" + error);
      });
					   

	}
}