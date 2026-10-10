---
layout: page
title: Bias Analysis in Vision-Language Models (CLIP)
description: Study of social biases in OpenAI's CLIP, with fine-tuning and adversarial debiasing experiments for glaucoma detection on Harvard's FairVLMed dataset.
img:
importance: 6
github: Rayan76q/CLIP_analysis
collaborators: Rayan Lalaoui
tags: [Python, Fairness in AI, Vision-Language Models, CLIP, Medical Imaging]
---

Research project supervised by [Alice Héliou](https://www.researchgate.net/profile/Alice-Heliou). It was developed in collaboration with [Rayan LALAOUI](https://github.com/Rayan76q).

**What it does**
- Studies [OpenAI's CLIP](https://openai.com/research/clip) on glaucoma detection with Harvard's FairVLMed dataset, which pairs fundus images with clinical notes and patient attributes (age, gender, race, ethnicity, language)
- Runs CLIP (ViT-B/32) in zero-shot mode with text prompts such as "a medical picture of a person with glaucoma", then adapts it with linear probing and fine-tuning on the images
- Measures performance and prediction distributions across demographic groups (for example AUC by race), and inspects the latent space by race, gender and ethnicity
- Explores adversarial debiasing to improve fairness (work in progress)
- Also tests how the wording of the prompts changes the demographic attributes (race, gender) that CLIP predicts

**Stack:** Python · PyTorch · OpenAI CLIP · scikit-learn · AIF360 · Fairlearn
