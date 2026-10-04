---
layout: page
title: Complex-Valued Neural Networks for Electromagnetic Scattering
description: Physics-informed complex-valued neural networks for the direct scattering problem, compared with real-valued networks. Internship project.
img:
importance: 5
category: research
github: aleksanyan-volodya/scattering-problems
tags: [Python, PyTorch, Complex-Valued Neural Networks, Physics-Informed ML]
---

Research internship at GeePS, CentraleSupélec, under the supervision of Marc Lambert (March to July 2026). The code of the article version is available [here](https://github.com/aleksanyan-volodya/scattering-problems/tree/v2.0-article).

**What it does**
- Implements physics-informed complex-valued neural networks (CVNN) to solve the direct scattering problem: predicting the electromagnetic fields scattered by a dielectric object (2-D scenes, 17 sources, 32 receivers, 32×32 grid)
- Tests whether a complex-valued network works better than a real-valued one for this kind of problem
- Builds the physics into the network by unrolling K iterations of the volume integral equation, with exact Green's function operators that are not learned
- Compares two versions: complex-valued blocks (complex-weight convolutions, ModReLU, phase-preserving normalization) and a real-valued CNN on stacked real and imaginary channels

**Results**
On 200 external test scenes with 8 stages, the complex version has a median relative L2 error of 3.5e-04 with 706k parameters. The real-valued version has 1.96e-04 with 1.4M parameters, so about twice as many.

**Stack:** Python · PyTorch · NumPy · SciPy · MATLAB (data generation)
