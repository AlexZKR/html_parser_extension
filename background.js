chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.name);
        sendResponse({farewell:"goodbye"});
    }
  );