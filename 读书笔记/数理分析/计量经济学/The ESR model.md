## The ESR model

ESR is always a good choice for us when select bias is unavoidable. This model is origin from Heckman model, which was root in control formula. The rest of article, i trying to display how ESR looks like in normal form. 

### 1.Variable

assuming we have exogenous variable named Z and X, but Z is not identical to X since Z is the characteristic of observation, and X are factors may influence the outcome ( Y ) of the observation.

### 2.Inverse Mills Ratio

- 1.Getting $u$ for Probit Model

$$
D^* = Z\beta +u \qquad \qquad \qquad D = 1, if \;\;D^*> 0
$$

- 2.Getting $\varepsilon_P$ and $\varepsilon_{NP}$ form first stage regression

$$
\left\{ \begin{smallmatrix}
\\Y_P = X\beta_P + \varepsilon_P \qquad \qquad \qquad if \;\;D_i = 1 

\\\\\\\\\\\\\\

Y_{NP} = X\beta_{NP} + \varepsilon_{NP} \qquad \qquad if \;\;D_i = 0 \;\;
\end{smallmatrix}
\right.
$$

- 3.Computing Inverse Mills Ratio

$$
\sigma_P = Cov(\varepsilon_P, u) \qquad\qquad\qquad\qquad \;

\\ \\ \\ \\  \\

\sigma_{NP} = Cov(\varepsilon_{NP}, u) \qquad\qquad\qquad \;\;\;
$$

### 3.Regression

Using regression formula to fit data, and it displays as follows:
$$
Y_P = X\beta_P + \lambda_P\sigma_P + v_{P} \\ \qquad \qquad \qquad
Y_{NP} = X\beta_{NP} + \lambda_{NP}\sigma_{NP} + \sigma_{NP} + v_{NP}
$$

### 4.Computing Treatment Effects

$$
ATT = X(\beta_P-\beta_{NP}) + \lambda_P(\sigma_P-\sigma_{NP})
$$



### $$ 

