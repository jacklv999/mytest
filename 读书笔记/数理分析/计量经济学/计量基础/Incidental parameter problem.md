## Incidental parameter problem

#### 1. What is IPP?

In FE models of the type
$$
y_{it}=α_i+βX_{it}+u_{it}
$$
$α$ is the incidental parameter, because theoretically speaking, it is of a secondary importance. Usually,  $α$ **is**important because it provides useful information on the individual intercept.

Most of the panels are short, i.e., $T$ is relatively small. In order to illustrate the incidental parameter problem I will disregard $β$ for simplicity. So the model is now:
$$
y_{it}=α_i+u_{it}\;\;\;\;\;u_{it}∼iiN(0,σ^2)
$$
So by using deviations from means method we have u^it=yit−y¯iu^it=yit−y¯i- and that's how we can get. Lets have a look on the estimate for:
$$
σ^2=1NT∑i∑t(yit−y¯i)2=σ2χ2N(T−1)NT=σ2N(T−1)NT=σ2T−1T
$$
You can see that if T is "large" then the term T−1TT−1T disappears, BUT, if T is small (which is the case in most of the panels) then the estimate of σ2σ2 will be inconsistent. This makes the FE estimator to be inconsistent.

The reason ββ is usually consistent because usually N is indeed sufficiently large and therefore has the desired asymptotic requirements.

Note that in spatial panels for example, the situation is opposite - T is usually considered large enough, but N is fixed. So the asymptotics comes from T. Therefore in spatial panels you need a large T!