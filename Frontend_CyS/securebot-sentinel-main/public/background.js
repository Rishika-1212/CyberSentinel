
// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  // Check URL security here
  console.log('Navigating to:', details.url);
});

// Listen for download events
chrome.downloads.onCreated.addListener((downloadItem) => {
  // Check download security here
  console.log('Download started:', downloadItem.url);
});
