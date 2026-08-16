# Jist
Quickly get the gist of the job you've applied for. 
Supports Linkedin, Jobstreet, and Indeed.
Exports data as tab-separated values (tsv).

## Attributes:
(Note: Availability depends heavily on the specific structure of the supported site)
- Job Title
- Location
- Company
- Work setting (remote, hybrid, ...)
- Job / Employment type (full-time, part-time, ...)
- Current Date
- Job Site
- Job Url / ID

## Supported:
|Platform|URL Patterns|Status|
|--------|------------|------|
|LinkedIn|[search](https://www.linkedin.com/jobs/search_results),[view](https://www.linkedin.com/jobs/view)|✅ Supported|
|Indeed|[default](https://ph.indeed.com/?vjk=*),[company](https://ph.indeed.com/cmp/*/jobs?jk=*)|✅ Supported|
|Jobstreet|[default](https://ph.jobstreet.com/jobs?jobId=*),[search](https://ph.jobstreet.com/*-jobs?jobId=*),[js-disabled](https://ph.jobstreet.com/job/*)|✅ Supported|

## Error Codes:
|Error Code|Description|
|----------|-----------|
|ERR1|Data extraction script error|
|ERR2|Copy script error|

### Instructions
1. git clone repository
2. access `{browser_name}://extensions` e.g. `brave://extensions`
3. enable developer mode
4. click **load unpacked** button, select the *repository* folder

### Misc
- LinkedIn is very brittle.