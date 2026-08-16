Quickly get the gist of the job. 
Supports Linkedin, Jobstreet, and Indeed.

Attributes:
- Job Title
- Location
- Company
- Employment type (full-time, part-time, etc. )
- Description / Content
- Work Setting
- Date posted / Current Date
- Job Site
- Job Url / ID

Save in CSV or JSON format

"https://www.linkedin.com/jobs/*", 
"https://*.indeed.com/?vjk=*", 
"https://*.jobstreet.com/*-jobs?jobId=*",
"https://*.jobstreet.com/jobs?jobId=*",
"https://*.jobstreet.com/job/*", # for ssr.
38393C

    "content_scripts": [
        {
            "js": ["scripts/content.js"],
            "matches": [
                "https://www.linkedin.com/jobs/*", 
                "https://*.indeed.com/?vjk=*", 
                "https://*.jobstreet.com/*-jobs?jobId=*",
                "https://*.jobstreet.com/jobs?jobId=*",
                "https://*.jobstreet.com/job/*"
            ]
        }
    ],


    "permissions": ["activeTab", "scripting", "storage"],
    "commands": {
        "_execute_action": {
            "suggested_key": {
                "default": "Ctrl+Shift+Space",
                "mac": "Ctrl+Shift+Space"
            }
        }
    }

    "action": {
        "default_popup": "popup/popup.html",
        "default_title": "gist",
        "default_icon": {
            "16": "icons/icon16.png",
            "32": "icons/icon32.png",
            "48": "icons/icon48.png",
            "128": "icons/icon128.png"
        }
    },