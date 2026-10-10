---
layout: page
title: Disease Prediction & Bias Mitigation on Chest X-rays
description: A ResNet18 classifier for disease detection on chest X-rays, trained with AIF360 reweighing on patient age and gender to study and reduce bias.
img:
importance: 7
github: aleksanyan-volodya/X-Ray_thorax_fairness_analysis
collaborators: Clément Cournil--Rabeux
tags: [Python, Fairness in AI, Deep Learning, Medical Imaging]
---

Medical AI systems trained on imbalanced datasets can underperform for some groups of patients. This project looks at that problem on chest X-rays. It was developed in collaboration with [Clément Cournil--Rabeux](https://github.com/Klem404).

**What it does**
- Analyses the metadata of the NIH chest X-ray images: the target is the presence of a disease (any finding versus "No Finding"), and the sensitive attributes are patient age and gender
- Computes reweighing weights with **AIF360** from the tabular metadata, by gender, by age quartile, and by both
- Fine-tunes a pretrained **ResNet18** with a weighted sampler that uses these weights
- Builds a second version of the dataset with image transformations (rotation, brightness, noise) as pre-processing
- Compares six models (no reweighing, and the three reweighing schemes, with and without the transformed images) and looks at performance across age and gender groups

**Stack:** Python · PyTorch · PyTorch Lightning · AIF360 · scikit-learn
