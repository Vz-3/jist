Quickly get the gist of the job you've applied for. 
Supports Linkedin, Jobstreet, and Indeed.
Exports data as tab-separated values (tsv).

Attributes (highly dependent on the structure of the supported sites):
- Job Title
- Location
- Company
- Job / Employment type (full-time, part-time, ...)
- Work Setting (hybrid, in-person, ...)
- Date posted fallbacks to Current Date
- Job Site
- Job Url / ID

Save in CSV or JSON format

Supported:
"https://www.linkedin.com/jobs/*", WIP
"https://ph.indeed.com/?vjk=*", 
"https://ph.indeed.com/cmp/*/jobs?jk=*"
"https://ph.jobstreet.com/*-jobs?jobId=*",
"https://ph.jobstreet.com/jobs?jobId=*",
"https://ph.jobstreet.com/job/*"

Error Codes:
ERR1 = Extract script error
ERR2 = Copy script error