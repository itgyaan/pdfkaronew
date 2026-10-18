// PDFKaro Chrome Extension - Background Service Worker

const PDFKARO_URL = 'https://pdfkaro.antideploy.app/en';

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Create main context menu item
    chrome.contextMenus.create({
        id: 'pdfkaro-open',
        title: 'Open with PDFKaro',
        contexts: ['link', 'page']
    });

    // Create submenu for specific tools
    chrome.contextMenus.create({
        id: 'pdfkaro-merge',
        parentId: 'pdfkaro-open',
        title: 'Merge PDFs',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfkaro-compress',
        parentId: 'pdfkaro-open',
        title: 'Compress PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfkaro-convert',
        parentId: 'pdfkaro-open',
        title: 'Convert to PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfkaro-all-tools',
        parentId: 'pdfkaro-open',
        title: 'All Tools →',
        contexts: ['link', 'page']
    });

    console.log('PDFKaro context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = PDFKARO_URL;

    switch (info.menuItemId) {
        case 'pdfkaro-merge':
            url = `${PDFKARO_URL}/tools/merge-pdf`;
            break;
        case 'pdfkaro-compress':
            url = `${PDFKARO_URL}/tools/compress-pdf`;
            break;
        case 'pdfkaro-convert':
            url = `${PDFKARO_URL}/tools/jpg-to-pdf`;
            break;
        case 'pdfkaro-all-tools':
        case 'pdfkaro-open':
            url = PDFKARO_URL;
            break;
        default:
            url = PDFKARO_URL;
    }

    // Open PDFKaro in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('PDFKaro background service worker started');
