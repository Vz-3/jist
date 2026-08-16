function extractDetails() {
    const params = new URLSearchParams(window.location.search);
    const q = (id) => { return document.querySelector(id)?.textContent?.trim() ?? null };

    // company
    if (window.location.pathname.includes('jobs') && (params.get('jk'))) {
        let [company, job_location] = q('[data-testid="jobDetailSubtitle"]').split(' - ');

        return {
            "job_title": q('[data-testid="jobsearch-JobInfoHeader-title"]'),
            "company": q('[data-testid="inlineHeader-companyName"]'),
            "job_location": job_location,
            "date": new Date().toISOString().split('T')[0],
            "site": window.location.hostname,
            "url": window.location.href,
        }
    } else if (params.get('vjk')) {
        // default
        return {
            "job_title": document.querySelector('[data-testid="jobsearch-JobInfoHeader-title"]')?.querySelector('span')?.textContent,
            "company": q('[data-testid="inlineHeader-companyName"]'),
            "job_location": q('[data-testid="inlineHeader-companyLocation"]'),
            "date": new Date().toISOString().split('T')[0],
            "site": window.location.hostname,
            "url": window.location.href,
        }
    }
    return null;
}

extractDetails()