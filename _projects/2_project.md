---
layout: page
title: Net Load Forecasting During the Sobriety Period
description: Adaptive forecasting tools for energy net load using SARIMA, GAM, and XGBoost, built for the context of energy price volatility and renewable intermittency.
img:
importance: 3
category: research
github: aleksanyan-volodya/Net-Load-Forecasting-During-the-Soberty-Period
tags: [Python, R, Time Series, XGBoost]
---

Forecasting energy net load (the difference between total consumption and renewable generation) is critical for grid stability, especially as renewable sources introduce intermittency.

**What it does**
- Implements three complementary forecasting approaches: **SARIMA** (seasonal decomposition), **GAM** (generalised additive models for non-linear trends), and **XGBoost** (gradient boosting for residual patterns)
- Models consumption variations driven by energy price signals and renewable energy intermittency
- Designed around the concept of energy sobriety: anticipating demand reductions under price volatility

**Key challenge**
Accounting simultaneously for seasonal patterns, weather effects, and price-driven behavioural shifts in a single forecasting pipeline.

**Stack:** Python · R · Scikit-learn · XGBoost · statsmodels
