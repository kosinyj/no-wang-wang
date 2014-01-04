var listener = function(details) {
  if ( (new Date()).getHours()>8 && (new Date()).getHours()<19){
    if (details.url.indexOf("blog.chinatimes.com") !== -1) {
      return {};
    } else {
      return {
        cancel: true
      };
    }
  }
};

var urls = [
  "*://*.facebook.com/*",
  "*://*.yahoo.com/*",
//   "*://*.chinatimes.com/*",
//   "*://*.ctitv.com.tw/*",
//   "*://*.ctv.com.tw/*"
];

var dd = new Date();

chrome.webRequest.onBeforeRequest.addListener(listener, { urls: urls },  [ "blocking" ]);
