---
layout: page
title: Disease Prediction & Bias Mitigation on Chest X-rays
description: A fair deep learning classifier for pulmonary disease detection from chest X-rays — addressing demographic bias in medical imaging models.
img:
importance: 3
category: research
github: aleksanyan-volodya/X-Ray_thorax_fairness_analysis
tags: [Python, Fairness in AI, Deep Learning, Medical Imaging]
---

Medical AI systems trained on imbalanced datasets can systematically underperform for certain demographic groups. This project addresses that problem in the context of chest X-ray disease prediction.

**What it does**
- Trains a deep learning classifier to predict multiple pulmonary diseases from the NIH Chest X-Ray dataset
- Analyses performance disparities across demographic subgroups (age, sex, race)
- Applies bias mitigation strategies using **AIF360** and **Fairlearn** to improve equitable performance across groups
- Evaluates the fairness–accuracy tradeoff under different mitigation methods

**Why it matters**
Deploying biased diagnostic tools in clinical settings can reinforce existing health disparities. This work explores how to build models that are both accurate and fair.

**Stack:** Python · PyTorch · AIF360 · Fairlearn · Scikit-learn
