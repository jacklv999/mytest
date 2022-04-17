## What is GMM?

for any specific linear regression formula $y = X\theta$ , the moment formula is
$$
X_i - \mu = op(1)        \tag{1}   
$$

$$
X_i^2 - \mu^2-\sigma^2 = op(1)     \tag{2}
$$

$$
X_i^3-\mu^3-3\mu\sigma^2 = op(1) \tag{3}
$$

$$
\cdots\cdots
$$

so, we could get condition that $g(X_i,\theta) = [X_i - \mu,X_i^2-\mu^2-\sigma^2, X_i^3-\mu^3-3\mu\sigma^2 ]'$ , $\theta = [\mu,\sigma^2]$, and we know that $E[ g(X_i,\theta)] = 0$ . According to this moment condition, using sample condition replace it, and we get formula:
$$
\frac{1}{N} \sum_i g(X_i,\hat{\theta})=0
$$
in the best result, we want the above formula being satisfied, but the formula number and the variable number are not always matched, we are using a weak hypothesis: the square is least, and we got formula as follows,
$$
\min_\hat{\theta} \; \left[  \frac{1}{N}\sum_i g(X_i, \hat{\theta})      \right]'\left[   \frac{1}{N}\sum_i g(X_i, \hat{\theta})    \right]
$$
but, in order to best use those information, we give different weight to different formula. usually, the unit matrix is a good choice, but the best choice is $[Eg(X_i,\theta)g(X_i,\theta)']^{-1}$ , so the formula becomes the follow one:
$$
\min_{\hat{\theta}} \;\left[ \frac{1}{N}\sum_ig(X_i,\hat{\theta})   \right]'W\left[  \frac{1}{N}\sum_i g(X_i,\hat{\theta})  \right]
$$
using this formula, we could get best estimation.

 



