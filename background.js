const site1 = "https://ph.jobstreet.com/job"

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(site1)) {
        const [{ result, ...rest }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['/scripts/jobstreet.js']
        });

        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: "DONE"
        });

        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: async (data) => {
                window.focus();

                try {
                    const rowString = Object.values(data)
                        .map(item => String(item ?? "").replace(/\t/g, " "))
                        .join('\t');

                    await navigator.clipboard.writeText(rowString);
                } catch (err) {
                    console.error("Failed to copy: ", err);
                }
            },
            args: [result]
        });

        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: ""
        });
    }
});