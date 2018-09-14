document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
		//document.getElementById("btn1").addEventListener("click",cameraTakePicture);
		//document.getElementById("btn2").addEventListener("click",scanBarCode);
		cordova.plugins.barcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );
	/**function cameraTakePicture(){
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
					   **/

	function scanBarCode(){
		alert('barcode scanner is starting');
	      cordova.plugins.barcodeScanner.scan(result,error);
	      function (result) {
          alert("Barcode found\n" +
                "Access" + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
     	}
  	}
      function (error) {
          alert("you need to download barcodescanner" + error);
      }
					   

	}
}var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();