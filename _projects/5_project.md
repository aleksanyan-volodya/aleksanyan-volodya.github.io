---
layout: page
title: Neural Solver for Electromagnetic Scattering
description: A physics-embedded neural network that predicts the electromagnetic fields scattered by dielectric objects. Internship project.
img:
importance: 5
category: research
github: aleksanyan-volodya/scattering-problems
tags: [Python, PyTorch, Physics-Informed ML, Complex-Valued Neural Networks]
---

Research internship at GeePS, CentraleSupélec, under the supervision of Marc Lambert (March to July 2026). The code of the article version is available [here](https://github.com/aleksanyan-volodya/scattering-problems/tree/v2.0-article).

**What it does**
- Predicts the electromagnetic fields scattered by dielectric objects in 2-D forward scattering scenes (17 sources, 32 receivers, 32×32 grid)
- Unrolls K iterations of the volume integral equation (VIE), using exact Green's function operators that are not learned, and trains only small correction convolutional networks at each stage
- Compares two architectures: complex-valued blocks (complex-weight convolutions, ModReLU, phase-preserving normalization) and a real-valued CNN on stacked real and imaginary channels
- Reaches a median relative L2 error of about 2e-04 to 4e-04 on 200 external test scenes with 8 stages

**Why it matters**
Classical solvers for scattering problems are accurate but slow. Building the physics into the network keeps the predictions faithful to the equations while using few trainable parameters.

**Stack:** Python · PyTorch · NumPy · SciPy · MATLAB (data generation)
