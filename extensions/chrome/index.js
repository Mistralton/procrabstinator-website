setInterval(getAllTabs, 5000);

function logTabs(tabs) {
  for (const tab of tabs) {
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function getAllTabs() {
  chrome.tabs.query({}).then(logTabs, onError);
}

async function fetchData() {
  const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
  const record=await res.json();
  document.getElementById("date").innerHTML=record.data[0].date;
  document.getElementById("areaName").innerHTML=record.data[0].areaName;
  document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
  document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();