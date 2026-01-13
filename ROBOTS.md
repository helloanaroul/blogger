# Customizing robots.txt for Blogger

This document explains how to customize the robots.txt file for your Blogger site to control search engine crawling and indexing behavior.

## Understanding Blogger's robots.txt

Blogger automatically generates a robots.txt file for your blog. The default configuration typically includes:

```
# all user agents
User-agent: *

# exclude pagination and query pages
Disallow: /search*updated-max=*
Disallow: /search*max-results=*
Disallow: /search*q=*

# include everything else
Allow: /

# sitemaps
Sitemap: https://www.example.com/sitemap.xml
Sitemap: https://www.example.com/sitemap-pages.xml
```

## Customizing Your robots.txt

### Accessing robots.txt in Blogger

1. Go to your Blogger dashboard
2. Navigate to "Settings" > "Search preferences"
3. Find the "Crawlers and indexing" section
4. Look for "Custom robots.txt" option
5. Click "Edit" next to "robots.txt"

### Common Customization Options

#### Blocking Specific Directories
```
User-agent: *
Disallow: /private/
Disallow: /temp/
```

#### Blocking Specific Pages
```
User-agent: *
Disallow: /page-not-ready.html
Disallow: /draft-post.html
```

#### Allowing Specific Content for Certain Crawlers
```
User-agent: Googlebot
Allow: /private-content/

User-agent: *
Disallow: /private-content/
```

#### Rate Limiting
```
User-agent: *
Crawl-delay: 10
```

### Important Notes

- Changes to robots.txt may take time to take effect
- Existing pages already indexed may remain in search results
- Use robots.txt cautiously as it affects search visibility
- Remember to update the sitemap URLs to match your actual domain

## Sample robots.txt File

A sample robots.txt file is provided in this repository as `robots.txt` that you can use as a starting point for your Blogger site.