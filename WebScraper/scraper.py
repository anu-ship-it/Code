import requests
from selectolax.parser import HTMLParser

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; JobScraper/1.0)"
}

def fetch_page(url: str) -> str:
    resp = requests.get(url, headers=HEADERS, timeout=10)
    resp.raise_for_status()
    return resp.text

def parse_jobs(html: str):
    tree = HTMLParser(html)

    jobs = []

    # Change selector based on website you are scraping
    for job in tree.css(".job-card"):
        title = job.css_first(".job-title")
        company = job.css_first(".company-name")
        location = job.css_first(".job-location")

        title = title.text(strip=True) if title else None
        company = company.text(strip=True) if company else None
        location = location.text(strip=True) if location else None

        if title and "backend" in title.lower():
            jobs.append({
                "title": title,
                "company": company,
                "location": location
            })

    return jobs

if __name__ == "__main__":
    url = "https://example.com/jobs?search=backend+developer"
    html = fetch_page(url)
    jobs = parse_jobs(html)

    for job in jobs:
        print(f"{job['title']} @ {job['company']} ({job['location']})")

# Finished file: WebScraper/scraper.py
# This is a simple web scraper that fetches job listings from a specified URL,
# parses the HTML to extract job titles, companies, and locations,
# and filters for backend developer positions.

import requests
from selectolax.parser import HTMLParser
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; JobScraper/1.0)"
}
def fetch_page(url: str) -> str:
    resp = requests.get(url, headers=HEADERS, timeout=10)
    resp.raise_for_status()
    return resp.text
def parse_jobs(html: str):
    tree = HTMLParser(html)

    jobs = []

    # Change selector based on website you are scraping
    for job in tree.css(".job-card"):
        title = job.css_first(".job-title")
        company = job.css_first(".company-name")
        location = job.css_first(".job-location")

        title = title.text(strip=True) if title else None
        company = company.text(strip=True) if company else None
        location = location.text(strip=True) if location else None

        if title and "backend" in title.lower():
            jobs.append({
                "title": title,
                "company": company,
                "location": location
            })

    return jobs
if __name__ == "__main__":
    url = "https://example.com/jobs?search=backend+developer"
    html = fetch_page(url)
    jobs = parse_jobs(html)

    for job in jobs:
        print(f"{job['title']} @ {job['company']} ({job['location']})")# Finished file: WebScraper/scraper.py
# This is a simple web scraper that fetches job listings from a specified URL,
# parses the HTML to extract job titles, companies, and locations,
# and filters for backend developer positions.