// Listen for icon click
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];

    function send_message(message) {
      // sends a message to the active tab
      chrome.tabs.sendMessage(activeTab.id, {"message": message});
    }

    // Send a sequence of messages
    Q.fcall(function () { send_message('click_first_link'); })
      .delay(2000)
      .then(function() {
        send_message('say_hello');
      })
      .delay(2000)
      .then(function() {
        send_message('click_another_link');
      })
    ;

  });
});
