const extract_btn = document.getElementById('gistify');

extract_btn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab) {
        // check if supported
    } else {
        console.error('not supported!')
    }

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['/scripts/jobstreet.js']
    });
});

const export_btn = document.getElementById('export');

export_btn.addEventListener('click', async () => {
    window.focus();
    let res = await chrome.storage.local.get('recent');

    try {
        await navigator.clipboard.writeText(JSON.stringify(Object.values(res)[0]));
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
});