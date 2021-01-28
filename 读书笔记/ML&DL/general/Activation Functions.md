## Activation Functions

#### 1. Sigmoid

**Sigmoid Activations** are a type of activation function for neural networks:
$$
f(x) = \frac{1}{1+exp(-x)}
$$
Some drawbacks of this activation that have been noted in the literature are: sharp damp gradients during backpropagation from deeper hidden layers to inputs, gradient saturation, and slow convergence

#### 2. Tanh

**Tanh Activation** is an activation function used for neural networks:
$$
f(x) = \frac{e^x-e^{-x}}{e^x+e^{-x}}
$$
Historically, the tanh function became preferred over the **sigmoid function** as it gave better performance for multi-layer neural networks. But it did not solve the vanishing gradient problem that sigmoids suffered, which was tackled more effectively with the introduction of **ReLU** activations.

#### 3. ReLU

using it prevent gradient vanish or exploded.
$$
f(x) = max(0,x)
$$

#### 4. GELU

The GELU activation function is 
$$
f(x) = xΦ(x)
$$
where $Φ(x)$ the standard Gaussian cumulative distribution function. In empirical evaluation of the GELU against the ReLU and ELU find performance improvements across all considered computer vision, natural language processing, and speech tasks.

#### Leaky ReLU

a type of activation function based on a **ReLU**, but it has a small slope for negative values instead of a flat slope.

![](data:image/jpeg;base64,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nCKDzFYeaxBYvz36e9AHe5HrVDWv+POP/r4i/wDQxWX4UimvNP0/UrlHSVLJIQHyGbgbifxHFamtf8ecf/XxF/6GKANClpKWgAooooAKKKKAEoPSlooAz7XTWhuXuLi5kupCx8vzAAIlPYYH69av0UUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBWvbY3cIjE8sBDA7oiAeO3NOtbWGztkggTbGgwBU9JQBnX+kQ388c/mzW8qcGSFtrOv90nuKtfZ0W2+zxZiQLtGzggVPRQBFbW0NpAkECBI0GAoqaiigBpGaqXmnreSxF5plSPO6NGwsn+961dooAYqhQABgDoKo61/x5x/9d4v/QxWhWfrX/HnH/18Rf8AoYoA0KWkpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACs7Wv+POP/r4i/wDQxWjWdrX/AB5x/wDXxF/6GKANClpKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z)  

This type of activation function is popular in tasks where we we may suffer from sparse gradients, for example training generative adversarial networks.

#### Swish

**Swish** is an activation function:
$$
f(x) = x\times \text{sigmoid}(\beta x)
$$
Nearly all implementations do not use the learnable parameter $\beta$, in which case the activation function is $xσ(x)$ ("Swish-1").

#### SELU

an activation functions that induce self-normalizing properties.
$$
f(x) = \lambda x \text{      $\;\;\;\;\;\;\;\;\;\;$if  x > 0}\\
f(x) = \lambda \alpha(exp(x)-1)\text{$\;\;\;\;\;\;\;\;$ if x < 0}
$$
it used in FNN, not CNN or RNN, and so on.























