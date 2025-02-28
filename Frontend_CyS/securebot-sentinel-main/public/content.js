
// Inject chatbot UI into pages
console.log('SecureBot Sentinel loaded');

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SCAN_PAGE') {
    // Scan page content for security issues
    console.log('Scanning page for security issues');
  }
});
