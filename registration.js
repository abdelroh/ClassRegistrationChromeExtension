

var something = "1";
var USERNAME = "username";
var PIN = "pin";
var CLASS1 = "class1";
var CLASS2 = "class2";
var CLASS3 = "class3";
var CLASS4 = "class4";

var regestration = {
  /**
   * Flickr URL that will give us lots and lots of whatever we're looking for.
   *
   * See http://www.flickr.com/services/api/flickr.photos.search.html for
   * details about the construction of this URL.
   *
   * @type {string}
   * @private
   */
  url_: 'https://prod11gbss8.rose-hulman.edu/BanSS/bwskfreg.P_AltPin',


  load: function() {

    // var js = document.createElement('script');
    // js.type = 'text/javascript';
    // js.src = chrome.extension.getURL('inject.js');
    // document.getElementsByTagName('head')[0].appendChild(js);
    

    $('#save').click(this.storeData);
    $('#register').click(this.register);
    chrome.storage.sync.get('username', function(obj){
      if(obj.username){
        $("#username").val(obj.username);
      }
    });
    chrome.storage.sync.get('pin', function(obj){
      if(obj.pin){
        $("#pin").val(obj.pin);
      }
    });
    chrome.storage.sync.get('class1', function(obj){
      if(obj.class1){
        $("#class1").val(obj.class1);
      }
    });
    chrome.storage.sync.get('class2', function(obj){
      if(obj.class2){
        $("#class2").val(obj.class2);
      }
    });
    chrome.storage.sync.get('class3', function(obj){
      if(obj.class3){
        $("#class3").val(obj.class3);
      }
    });
    chrome.storage.sync.get('class4', function(obj){
      if(obj.class4){
        $("#class4").val(obj.class4);
      }
    });

  },

  storeData: function () {
     // Get a value saved in a form.
    var username = $('#username').val();
    var pin = $('#pin').val();
    var class1 = $('#class1').val();
    var class2 = $('#class2').val();
    var class3 = $('#class3').val();
    var class4 = $('#class4').val();
    if (username) {
      chrome.storage.sync.set({'username': username}, function() {
      console.log('username saved');
      });
    }
    if (pin) {
      chrome.storage.sync.set({'pin': pin}, function() {
      console.log('pin saved');
      });
    }
    if (class1) {
      chrome.storage.sync.set({'class1': class1}, function() {

      console.log('class1 saved');
      });
    }
    if (class2) {
      chrome.storage.sync.set({'class2': class2}, function() {

      console.log('class2 saved');
      });
    }
    if (class3) {
      chrome.storage.sync.set({'class3': class3}, function() {

      console.log('class3 saved');
      });
    }
    if (class4) {
      chrome.storage.sync.set({'class4': class4}, function() {

      console.log('class4 saved');
      });
    }
    window.close();
  },


  /**
   * Sends an XHR GET request to grab photos of lots and lots of kittens. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
  register: function() {

    window.close();

  }
};



// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  regestration.load();
});
