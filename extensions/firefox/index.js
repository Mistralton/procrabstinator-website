setInterval(getAllTabs, 10000);

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
  console.log(testFetch)
  const testFetchJson = await testFetch.json()
  console.log(testFetchJson)
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function getAllTabs() {
  browser.tabs.query({}).then(logTabs, onError);
}