setInterval(getAllTabs, 10000);
let tabOpened = false;

async function logTabs(tabs) {
  let tabArr = []
  for (const tab of tabs) {
    tabArr.push(tab.url)
  }
  const testFetch = await fetch('http://localhost:5000/', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(tabArr),
  })

  const testFetchJson = await testFetch.text()
  if(JSON.parse(testFetchJson).length > 0 && !tabOpened) {
    chrome.tabs.create({url:"index.html"});
    tabOpened = true;
    setTimeout(() => {
      tabOpened = false;
    }, 21600000);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function getAllTabs() {
  browser.tabs.query({}).then(logTabs, onError);
}