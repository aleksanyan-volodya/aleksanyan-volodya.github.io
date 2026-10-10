---
layout: page
title: Mini-LLaDA, a Masked Diffusion Language Model
description: Re-implementation of LLaDA, a discrete diffusion language model of 33M parameters trained from scratch, with an interactive app that shows text being unmasked step by step.
img:
importance: 1
github: aleksanyan-volodya/LLaDA_interactive
tags: [Python, PyTorch, Diffusion Language Models, Streamlit]
---

LLaDA generates text without the usual left-to-right autoregressive scheme. A masked diffusion model is trained to predict masked tokens, then generates by starting from a fully masked sequence and revealing tokens progressively. This project re-implements the idea at a small scale and makes the process visible.

**What it does**
- Implements a bidirectional Transformer mask predictor (8 layers, 8 heads, RoPE, RMSNorm) trained from scratch with the masked diffusion objective: a random masking ratio per sequence and a cross-entropy loss computed on masked tokens only
- Trains on TinyStories with a custom 8,000-token tokenizer, on a single Kaggle T4 GPU with mixed precision and automatic checkpoint resuming
- Generates text by iterative unmasking, and ships a Streamlit app where each denoising step can be followed on screen

**Results and limits**
The 33M-parameter model produces readable short stories. One visible limitation is that generations keep falling back on "once upon a time", which suggests trying more varied data or a larger model with longer training.

**Stack:** Python · PyTorch · Hugging Face tokenizers · Streamlit
