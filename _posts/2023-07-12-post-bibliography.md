---
layout: post
title: a post with bibliography
date: 2023-07-12 09:56:00-0400
description: an example of a blog post with bibliography
tags: formatting bib
categories: sample-posts
giscus_comments: true
related_posts: false
related_publications: false
---

This post shows how to add bibliography to simple blog posts. We support every citation style that [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) does. To use citations, first add entries to `_bibliography/papers.bib` and then cite them using the `{% raw %}{% cite %}{% endraw %}` tag.

Example formats:

```liquid
{% raw %}{% cite your_paper_2024 %}{% endraw %} - Simple citation
{% raw %}{% cite paper1_2024 paper2_2024 %}{% endraw %} - Multiple citations
{% raw %}{% reference your_paper_2024 %}{% endraw %} - Long reference format
```

For more information, see the [jekyll-scholar documentation](https://github.com/inukshuk/jekyll-scholar).

If you would like something more academic, check the [distill style post]({% post_url 2018-12-22-distill %}).

