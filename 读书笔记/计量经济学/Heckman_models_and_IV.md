## [转]Two stage models: Difference between Heckman models and Instrumental variables

**To answer your first question,** you are correct that sample selection is a specific form of endogeneity (See Antonakis et al. 2010 for a good basic review of endogeneity and common remedies), however you are not correct in saying that the likelihood of being treated is the endogenous variable, as it is the treatment variable itself ("non-random treatment assignment")--rather than the likelihood of being treated--that is endogenous in sample selection. Recall that endogeneity refers to a situation where you have incorrectly identified a causal relationship between factor X and factor Y, when the observed “relationship” is actually due to another factor Z that affects both X and Y. Put another way, given a regression model:

$y_i=β_0+β_1x_i+...+ϵ_iy_i=β_0+β_1x_i+...+ϵ_i$

endogeneity occurs when one or more than one of your predictors is related to the error term in the model. That is, when Cov(x,ϵ)≠0.

The common causes of endogenity include:

1. Omitted variables(some things we just can’t measure)
    - Motivation/choice
    - Ability/talent
    - **Self-selection**
2. **Measurement error** (we would like to include $x_j$, but we only observe $x_j^∗$)
3. **Simultaneity/bidirectionality** (in children under 5, the relationship between the nutritional status indicator “weight for age” and whether the child had a recent illness might be simultaneous).

Different types of problems require slightly different solutions, which is where the difference between IV and Heckman-type corrections lie. Of course there are differences in the underlying mechanics of these methods, but the premise is the same: which is to remove endogeneity, ideally via an exclusion restriction, i.e. one or more instruments in the case of IV or a variable that affects selection but not the outcome in the case of Heckman.

**To answer your second question,** you have to think about the differences in the types of data limitations that gave rise to the development of these solutions. I like to think that the instrumental variable (IV) approach is used when one or more variables is endogenous, and there are simply no good proxies to stick in the model to remove the endogeneity, but the covariates and outcomes are observed for all observations. Heckman-type corrections, on the other hand, are used when you have truncation, i.e. the information is not observed for those in sample where the value of the selection variable == 0.

**The instrumental variable (IV) approach**

Think of the classic econometric example for IV regression with the two-stage least squares (2SLS) estimator: the effect of education on earnings.

$Earnings_i=β_0+β_1OwnEd_i+ϵ_i $         (1)

Here level of educational achievement is endogenous because it is determined partly by the individual's motivation and ability, both of which also affect a person's earnings. Motivation and Ability are not typically measured in household or economic surveys. Equation 1 can therefore be written to explicitly include motivation and ability:

$Earnings_i=β_0+\{β_1OwnEd_i+β_2Motiv_i+β_3Abil_i\}+ϵi$        (2)

Since MotivMotiv and AbilAbil are not actually observed, Equation 2 can be written as:

$Earnings_i=β_0+β_1OwnEd_i+u_i$  (3),

where $u_i=β_2Motiv_i+β_3Abil_i+ϵ_i$     (4).

Therefore a naïve estimation of the effect of education on earnings via OLS would be biased. This part you already know.

In the past, people have used parents' education as instruments for the subject's own level of education, as they fit the 3 requirements for a valid instrument (zz):

1. zz must be related to the endogenous predictor -𝐶𝑜𝑣(𝑧,𝑥)≠0,
2. zz cannot be directly related to the outcome –𝐶𝑜𝑣(𝑧,𝑦)=0, and
3. zz cannot be related to the unobservable (u) characteristic (that is, zz is exogenous) – 𝐶𝑜𝑣(𝑧,𝑢)=0

When you estimate the subject's education ($OwnEd$) using parents' education ($MomEd$ and $DadEd$) at first stage and use the predicted value of education ($\hat{OwnEd}$) to estimate $Earnings$  at second stage, you are (in very simplistic terms), estimating $Earnings$ based on the portion of $OwnEd $ that is not determined by $motivation/ability$.

**Heckman-type corrections**

As we have established before, non-random sample selection is a specific type of endogeneity. In this case, the omitted variable is how people were selected into the sample. Typically, when you have a sample selection problem, your outcome is observed only for those for whom the sample selection `variable == 1`. This problem is also known as "incidental truncation," and the solution is commonly known as a Heckman correction. The classic example in econometrics is the wage offer of married women:

$Wage_i=β_0+β_1Educ_i+β_2Experience_i+β_3Experience^2_i+ϵ_i$    (5)

The problem here is that $Wage$ is only observed for women who worked for wages, so a naïve estimator would be biased, as we do not know what the wage offer is for those who do not participate in the labor force, the selection variable ss. Equation 5 can be rewritten to show that it is jointly determined by two latent models:

$Wage^∗_i=Xβ′+ϵ_i  $   (6)

$LaborForce^∗_i=Zγ′+ν_i$  (7)

That is, $Wage=Wage^∗_i$ IFF $LaborForce^∗_i>0$ and $Wage=.$ IFF $LaborForce∗i≤0$

The solution here is therefore to predict the likelihood of participation in the labor force at first stage using a probit model and the exclusion restriction (the same criteria for valid instruments apply here), calculate the predicted inverse Mills ratio (λ^λ^) for each observation, and in second stage, estimate the wage offer using the λ^λ^ as a predictor in the model (Wooldridge 2009). If the coefficient on λ^λ^ is statistically equal to zero, there is no evidence of sample selection (endogeneity), and OLS results are consistent and can be presented. If the coefficient on λ^λ^ is statistically significantly different from zero, you will need to report the coefficients from the corrected model.









**References**

1. Antonakis, John, Samuel Bendahan, Philippe Jacquart, and Rafael Lalive. 2010. “On Making Causal Claims: A Review and Recommendations.” *The Leadership Quarterly* 21 (6): 1086–1120. doi:10.1016/j.leaqua.2010.10.010.
2. Wooldridge, Jeffrey M. 2009. Introductory Econometrics: A Modern Approach. 4th ed. Mason, OH, USA: South-Western, Cengage Learning.