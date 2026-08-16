# Jist
Quickly get the gist of the job you've applied for. 
Supports Linkedin, Jobstreet, and Indeed.
Exports data as tab-separated values (tsv).

## Attributes:
(Note: Availability depends heavily on the specific structure of the supported site)
- Job Title
- Location
- Company
- Job / Employment type (full-time, part-time, ...)
- Date posted fallbacks to Current Date
- Job Site
- Job Url / ID

## Supported:
|Platform|URL Patterns|Status|
|--------|------------|------|
|LinkedIn|[https://www.linkedin.com/jobs/](https://www.linkedin.com/jobs/)*|🚧 WIP|
|Indeed|[https://ph.indeed.com/?vjk=](https://ph.indeed.com/?vjk=)*[https://ph.indeed.com/cmp/*/jobs?jk=](https://ph.indeed.com/cmp/*/jobs?jk=)*|✅ Supported|
|Jobstreet|[https://ph.jobstreet.com/*-jobs?jobId=](https://ph.jobstreet.com/*-jobs?jobId=)*[https://ph.jobstreet.com/jobs?jobId=](https://ph.jobstreet.com/jobs?jobId=)*[https://ph.jobstreet.com/job/](https://ph.jobstreet.com/job/)*|✅ Supported|

## Error Codes:
|Error Code|Description|
|----------|-----------|
|ERR1|Data extraction script error|
|ERR2|Copy script error|