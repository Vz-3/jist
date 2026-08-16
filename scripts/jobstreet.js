function extractDetails() {
    if (!window.location.pathname.includes('job')) {
        return null
    }

    const q = (id) => { return document.querySelector(id)?.textContent?.trim() ?? null };

    return {
        "job_title": q('[data-automation="job-detail-title"]'),
        "company": q('[data-automation="advertiser-name"]'),
        "job_location": q('[data-automation="job-detail-location"]'),
        "job_type": q('[data-automation="job-detail-work-type"]'),
        "date": new Date().toISOString().split('T')[0],
        "site": window.location.hostname,
        "url": window.location.href,
    }
}

extractDetails()