const base_path = '/scripts'
const supported_sites = [
    { keyword: 'jobstreet.com', script: [`${base_path}/jobstreet.js`] },
    { keyword: 'linkedin.com', script: [`${base_path}/linkedin.js`] },
    { keyword: 'indeed.com', script: [`${base_path}/indeed.js`]}
];

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: ""
    });
});

chrome.action.onClicked.addListener(async (tab) => {
    const matchedSite = supported_sites.find(site => tab.url.includes(site.keyword));

    if (matchedSite) {
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: "WAIT"
        });

        const [res] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: matchedSite.script
        });

        const result = res?.result;

        if (result === null || result === undefined) {
            await chrome.action.setBadgeText({
                tabId: tab.id,
                text: "ERR1"
            });
            console.warn("Script returned no data or null");
            return;
        }
        
        const [copy] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: async (data) => {
                window.focus();

                try {
                    const rowString = Object.values(data)
                        .map(item => String(item ?? "").replace(/\t/g, " "))
                        .join('\t');

                    await navigator.clipboard.writeText(rowString);
                    return true
                } catch (err) {
                    console.error("Failed to copy: ", err);
                    return null
                }
            },
            args: [result]
        });

        const copy_res = copy?.result;

        if (copy_res === null || copy_res === undefined) {
            await chrome.action.setBadgeText({
                tabId: tab.id,
                text: "ERR2"
            });
            console.warn("Script failed to copy to clipboard");
            return;
        } else {
            await chrome.action.setBadgeText({
                tabId: tab.id,
                text: "DONE"
            });
            return true;
        }
    }
});