## Retinanet论文笔记

### 1. Abstract

- Discovering extreme foreground-bckground class imbalance matters
- Addrssng it by down-weights the loss assigned to well-classified samples

### 2. Introduction

Identifying class imbalance in train as resn hold one-stage and new loss func for it.

It’s addressed in R-CNN-like by a two-stage cascade and sampling heuristics

- Fir stage narrows down num. candt  loc to small num,filter bckgrnd smpl

- Sec stage, sampling heuristics, get balance between fore/back ground

We propose a new loss func for class imbalance. 

It can down-wght the contrib. of easy smpl  and focus model on hard examples

### 3. Related Work

##### Classic Object Detectors

Sliding-window paradigm, classfer is appld on a dense img grid, has a long history

- LeCun et al. who applied conv to handwritten digit recognition. 

- DPMs helped extend dense detectors to more general obj categories

The sliding-window approach was the leading detection paradigm in classic CV

##### Two-stage Detectors

2-stage paradigm dominates mdrn OD

- Fir stage gen. candidate proposals  contain all objs & filtering out neg. loc
- Sec stage classifies proposals into foreground classes / background

##### Class Imbalance

Both classic methods and recent methods face a large class imbalance during train.

Detectors evaluate $10^4-10^5$ candt loc per img but only a few loc contain obj

- Training is inefficient as most loc are easy neg. giving no useful learn signal
- The easy neg. can overwhelm training and lead to degenerate models

##### Robust Estimation

Robust loss func by reducng contrib of outlier: down-weight loss of hard smpl

Our loss addrss  class imbalance by dwn-wght easy sample so their contrib is small even in large num.

### 4. F