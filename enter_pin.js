$(document).ready(function () {
	var pinInput = $("#apin_id");
	if(pinInput){
		enterPin();
	}
  	
},true); 

var enterPin = function(){

	chrome.storage.sync.get('pin', function(obj){
      if(obj.pin){
        $("#apin_id").value = obj.pin;
      }
    });
    var button = $('.pagebodydiv form>input');
    //button.click();
};