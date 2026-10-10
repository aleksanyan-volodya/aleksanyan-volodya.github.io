---
layout: page
title: Net Load Forecasting During the Sobriety Period
description: Forecasting French daily net electricity demand under energy sobriety and growing renewable production, comparing linear models, SARIMAX, GAMs and XGBoost.
img:
importance: 5
github: aleksanyan-volodya/Net-Load-Forecasting-During-the-Soberty-Period
tags: [Python, R, Time Series, GAM, XGBoost]
---

Forecasting challenge on French electricity data, with daily values from 2012 to early 2021. Demand habits changed during this period (massive savings after the rise of energy prices) and solar and wind production kept growing, so models have to adapt. The target is the net demand, and predictions are scored with the pinball loss at the 80% quantile, which penalizes under-prediction more than over-prediction.

The project was deliberately exploratory: the aim was to understand several families of models and their failure modes rather than to squeeze out the best score, and the report documents the mistakes as well as the results.

**What it does**
- Builds features for temperature thresholds and for the structural break caused by COVID-19
- Implements linear regression and quantile regression by gradient descent from scratch, with L1 and L2 regularization and rolling-window cross-validation (submission score 540)
- Fits ARIMA, SARIMA and SARIMAX models. Switching from one long-horizon forecast to a rolling one-day-ahead forecast brought the score from about 1200 to about 650 without changing the model
- Compares four GAM specifications with mgcv in R. The best one (a mean model, which beat the quantile GAM) reaches a score of 480
- Tests XGBoost on wind power only, and chooses not to push black-box models further because their hyperparameters were hard to justify

**Stack:** Python · R · mgcv · statsmodels · XGBoost
