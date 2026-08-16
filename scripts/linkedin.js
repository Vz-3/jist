function extractDetails() {
    if (!window.location.pathname.includes('job')) {
        return null
    }

    let [job_title, company, ...rest] = document.querySelector('title')?.textContent?.trim().split(' | ');
    let core, content_header;
    // jobs/search-results and jobs/view

    const job_settings = ['On-site', 'Remote', 'Hybrid'];
    const job_types = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Volunteer', 'Temporary'];
    const columns = document.querySelectorAll('[data-testid="lazy-column"]:not([componentkey="SearchResultsMainContent"])');
    
    if (window.location.pathname.includes('jobs/view')) {
        [core] = columns;
        [,content_header,]= core.children;
    } else {
        [, core] = columns;
        [content_header, ] = core.children;
    }

    const [jtitle, job_location_area, ...jrest] = content_header.querySelectorAll('p:has(span)');

    const job_location = job_location_area.querySelector('span')?.textContent?.split(', ')[0];

    const job_type_n_settings = content_header.querySelectorAll('[aria-disabled]');

    let job_type, job_setting;

    job_type_n_settings.forEach((element) => {
        const text = element?.textContent.trim();

        if (job_settings.includes(text)) {
            job_setting = text;
        } else if (job_types.includes(text)) {
            job_type = text;
        }
    });

    return {
        "job_title": job_title,
        "company": company,
        "job_location": job_location,
        "job_type": job_type,
        "job_setting": job_setting,
        "date": new Date().toISOString().split('T')[0],
        "site": window.location.hostname,
        "url": window.location.href,
    }
}

extractDetails()