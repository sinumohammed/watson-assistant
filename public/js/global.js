
/* global ConversationPanel: true, PayloadPanel: true*/
/* eslint no-unused-vars: "off" */

// Other JS files required to be loaded first: apis.js, conversation.js, payload.js
var GlobalInit = (function () {

  // Publicly accessible methods defined
  return {
    init: init
  };

  // Initialize the module
  function init() {
    // Initialize all modules
    ConversationPanel.init();
    PayloadPanel.init();
  }
  
})();
