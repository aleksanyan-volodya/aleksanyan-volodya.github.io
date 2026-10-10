---
layout: page
title: Interactive Transformer Architecture Demo
description: A Streamlit platform built around a Transformer encoder written from scratch, with sentiment and emotion recognition modules that can be trained online and explained token by token.
img:
importance: 4
github: aleksanyan-volodya/Attention
tags: [Python, Deep Learning, NLP, Transformers, Streamlit]
---

Course project for the Deep Learning course (Master 1 Mathematics and AI, Université Paris-Saclay). The goal is to show the attention mechanism at work in a real application instead of in static diagrams.

**What it does**
- Implements the Transformer building blocks from scratch in PyTorch: multi-head scaled dot-product attention, positional encoding, feed-forward blocks and encoder layers
- Provides two modules in a Streamlit app: binary sentiment prediction (positive or negative, IMDB reviews) and multi-label emotion prediction (anger, fear, joy, sadness, surprise, neutral, GoEmotions)
- Lets the user train a model directly from the app, with the size of the training subset as a setting, so that it stays practical on a CPU, then predict on any text typed in
- Explains a sentiment prediction by showing the tokens that influenced it most, using gradient times input on the token embeddings

**Stack:** Python · PyTorch · Streamlit
