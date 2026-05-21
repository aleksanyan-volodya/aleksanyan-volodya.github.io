---
layout: page
title: Bias Analysis in Vision-Language Models (CLIP)
description: Studied social biases in OpenAI's CLIP and explored fine-tuning and adversarial learning strategies to improve fairness on medical images — internship at Thales.
img:
importance: 1
category: research
github: Rayan76q/CLIP_analysis
tags: [Python, Fairness in AI, Vision-Language Models, CLIP, Medical Imaging]
---

Research internship under the supervision of [Alice Héliou](https://www.researchgate.net/profile/Alice-Heliou). This project was developed in collaboration with [Rayan LALAOUI](https://github.com/Rayan76q).

**What it does**
- Audits social biases encoded in [OpenAI's CLIP](https://openai.com/research/clip), a large vision-language model trained on 400M image-text pairs
- Analyses how these biases propagate when CLIP is fine-tuned on medical imaging tasks (chest X-rays)
- Implements and compares several bias mitigation strategies: supervised fine-tuning, adversarial debiasing, and contrastive approaches
- Evaluates the fairness–performance tradeoff across demographic subgroups

**Why it matters**
CLIP and similar vision-language models are increasingly used as foundations for medical AI systems. Understanding and controlling the biases they carry before deployment is critical to avoid reinforcing health disparities.

**Stack:** Python · PyTorch · OpenAI CLIP · AIF360 · Fairlearn
