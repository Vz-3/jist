function extractDetails() {
    const params = new URLSearchParams(window.location.search);
    const q = (id) => { return document.querySelector(id)?.textContent?.trim() ?? null };
    const [date, site, url] = [new Date().toISOString().split('T')[0], window.location.hostname, window.location.href]

    if (window.location.pathname.includes('jobs') && (params.get('jk'))) {
        let [company, job_location] = q('[data-testid="jobDetailSubtitle"]').split(' - ');

        return {
            "job_title": q('[data-testid="jobsearch-JobInfoHeader-title"]'),
            "company": company,
            "job_location": job_location,
            "date": date,
            "site": site,
            "url": url,
        }
    } else if (params.get('vjk')) {
        // default
        return {
            "job_title": document.querySelector('[data-testid="jobsearch-JobInfoHeader-title"]')?.querySelector('span')?.textContent,
            "company": q('[data-testid="inlineHeader-companyName"]'),
            "job_location": q('[data-testid="inlineHeader-companyLocation"]'),
            "date": date,
            "site": site,
            "url": url,
        }
    }
    return null;
}

extractDetails()