---
layout: page
title: Recommender for Lesser-Known Films
description: A personal film recommender trained on a Letterboxd export, built to surface niche and underrated films instead of only popular, well-rated ones.
img:
importance: 2
github: aleksanyan-volodya/recommendations_letterboxd
tags: [Python, Recommender Systems, Streamlit, TMDb, MovieLens]
---

Most recommenders favor what is already popular. This project asks the opposite question: can a model learn my taste well enough to suggest films that few people have rated, where the crowd gives almost no signal? It is trained on my own Letterboxd export (ratings, likes, watchlist).

**What it does**
- Ingests the Letterboxd export into clean tables and resolves every film to its TMDb identifier, with a manual override file for the hard cases
- Enriches films with TMDb metadata (genres, keywords, credits, vote count) and joins MovieLens and IMDb data for collaborative signals
- Compares a content-based ridge model, a collaborative model that keeps MovieLens item factors fixed and solves only for my position in that space, and a hybrid that stacks the two
- Provides a Streamlit dashboard with taste diagnostics, a model playground with live hyperparameters, and a view of the largest prediction errors

**What makes it different**
Every metric is reported per popularity decile, not only overall. A model that looks good on average but fails on the least popular films fails at exactly what the project is for. The crowd's average rating, rescaled to my scale, is always kept as a baseline: a personal model that cannot beat it has learned nothing personal.

**Lessons so far**
Two bugs produced plausible numbers instead of errors, and each now has a regression test. Centering ratings per film removed the quality signal, and restoring it moved the collaborative model from 0.848 to 0.745 RMSE. Stacking weights fitted on in-sample predictions silently collapsed the hybrid to a single model, so they are now fitted out of fold.

**Stack:** Python · pandas · scikit-learn · XGBoost · Streamlit · TMDb API · MovieLens
