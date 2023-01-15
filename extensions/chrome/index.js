setInterval(getAllTabs, 5000);

function logTabs(tabs) {
  // for (const tab of tabs) {
  //   console.log(tab.url);
  // }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function getAllTabs() {
  chrome.tabs.query({}).then(logTabs, onError);
}