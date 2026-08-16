function extractDetails() {
    const job_title = document.querySelector('[data-automation="job-detail-title"]').textContent;
    const company = document.querySelector('[data-automation="advertiser-name"]').textContent;
    const job_location = document.querySelector('[data-automation="job-detail-location"]').textContent;
    const job_type = document.querySelector('[data-automation="job-detail-work-type"]').textContent;

    return {
        "job_title": job_title,
        "company": company,
        "job_location": job_location,
        "job_type": job_type,
        "date": new Date().toISOString().split('T')[0],
        "site": window.location.hostname,
        "url": window.location.href
    }
}

extractDetails()