chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "click_first_link" ) {
      $("a").first()[0].click();
    }
    if( request.message === "say_hello" ) {
      console.log("hello");
    }
    if( request.message === "click_another_link" ) {
      $("a").first()[0].click();
    }
  }
);
