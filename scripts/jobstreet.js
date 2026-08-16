function extractDetails() {
    const job_title = document.querySelector('[data-automation="job-detail-title"]').textContent;
    const company = document.querySelector('[data-automation="advertiser-name"]').textContent;
    const job_location = document.querySelector('[data-automation="job-detail-location"]').textContent;
    const job_type = document.querySelector('[data-automation="job-detail-work-type"]').textContent;
    
    // - Job Title
    // - Company
    // - Location
    // - employment_type 
    // - Description / Content
    // - Work Setting
    // - Job Site
    // - Job Url / ID
    
    let meta = {
        "date": new Date().toISOString().split('T')[0],
        "site": window.location.hostname,
        "url": window.location.href,
    };
    
    let csv = `${job_title},${company},${job_type},${job_location},${meta.date},${meta.site},${meta.url}`
    chrome.storage.local.set({ "recent": csv})
}

extractDetails()