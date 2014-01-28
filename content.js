

var login = function(){
  var username;
  chrome.storage.sync.get('username', function(obj){
      if(obj.username){
        username = obj.username;
        if(username){
          var input = document.getElementsByName('id1')[0];
          input.value = username;
          var button = document.getElementsByName('bt1')[0];
          button.disabled = false;
          button.click();
        }
      }
    });
};


$(document).ready(function () {
  var firstPage = $('form');
  if(firstPage[0]){
    login();   
  }
},true); 