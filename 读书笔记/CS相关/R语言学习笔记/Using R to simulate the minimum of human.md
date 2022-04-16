## Using R to simulate the minimum of human

#### 1.设定超参数

- 生育率、近亲代数、初始人口、总时间

~~~R
####hyperparameter
Fertility_Ratio = 2.1
Relative_Generation = 3
Initial_Human = 30
Total_Year = 10
~~~

#### 2.初始化 `human` 对象

```R
library(R6)
Human = R6Class("Human",
	public = list(
		id = NA,age = NA,gender = NA,father=NA,mather=NA,
		partner = NA,relative=NA,year_today = NA,				#必须全部初始化
		initialize = function(id,age,gender,year_today,fthr,mthr){	#实例化赋值
			self$id = id
            	self$age = age
			self$gender = gender
			self$year_today = year_today
			self$father = fthr
			self$mather = mthr
		},
		growth = function(year){
			if (year>self$year_today){
				self$age = self$age+1
				self$year_today = year
			}
		}
	)
)
assign("Human",Human,envir=.GlobalEnv)
```

#### 3.确定是否未婚

```R
unmarried_check = function(id){
	Human = get(paste("Human_",id,sep=""),envir=.GlobalEnv)
	unmarried_M = get("unmarried_M",envir=.GlobalEnv)
	unmarried_F = get("unmarried_F",envir=.GlobalEnv)
	if (Human$age>17){
		if(is.na(Human$partner)){
			if (Human$gender==1){
				unmarried_M[(length(unmarried_M)+1)]=id;
			};
			if (Human$gender==0){
				unmarried_F[(length(unmarried_F)+1)]=id;
			};
		}
	}
	assign("unmarried_F",unmarried_F,envir=.GlobalEnv)
	assign("unmarried_M",unmarried_M,envir=.GlobalEnv)
}
```

#### 4.分配配偶(缺失亲戚检查代码)

```R
assign_partner = function(id){
	Human = get(paste("Human_",id,sep=""),envir=.GlobalEnv)
	unmarried_M = get("unmarried_M",envir=.GlobalEnv)
	unmarried_F = get("unmarried_F",envir=.GlobalEnv)
	if (!is.na(Human$partner)){
		if (Human$gender==1){
			if (!is.null(unmarried_F[1])){
				Human$partner = unmarried_F[1]
				unmarried_F = unmarried_F[-1]
			}
		}
		if (Human$gender==0){
			if(!is.null(unmarried_M[1])){
				Human$partner = unmarried_M[1]
				unmarried_M = unmarried_M[-1]	
			}
		}
	}
	assign("unmarried_F",unmarried_F,envir=.GlobalEnv)
	assign("unmarried_M",unmarried_M,envir=.GlobalEnv)
}
```

#### 5.生育函数

```R
####确定要生育的孩子数量
disRand<-function(e=2.1){
	if (e==2.1){
		p = c(0.2,0.5,0.3)
		d = c(1,2,3)
	}else {
		d_2 = floor(e)
		d = c((d_2-1),d_2,(d_2+1))
		p = c((((d_2+3)/4)-(e/2)),0.5,((e/2)-((d_2+1)/4)))
	}
	u<-runif(1,0,1)
	if(u<p[1]){ 
		x<-d[1] 
	}else if(u<p[2]){
		 x<-d[2]
	}else {
		x<-d[3]
	}
      return(x)
}
####生育过程
fertility = function(id,FR=F_R){
	Human_C = get("Human",envir=.GlobalEnv)
	Human = get(paste("Human_",id,sep=""),envir=.GlobalEnv)
	Human_ID = get("Human_ID",envir=.GlobalEnv)
	HN = get("Human_Number",envir=.GlobalEnv)
	if (Human$id %in% Human_ID){
		if (!is.na(Human$partner)){
			tmp = Human_ID$partner
			Human_ID = Human_ID[-which(Human_ID==tmp)]
		}
		n = disRand(FR)
		for (i in (HN+1):(HN+n)) {
			s <- sprintf("tmp_3 <- Human_C$new(id=%s,age=%s,
				gender=%s,year_today=%s,fthr=%s,mthr=%s)",
				i,i,18,sample(c(0,1),1),1,0,0)
			eval(parse(text = s))
			assign(paste("Human_",i,sep=""),tmp_3,envir=.GlobalEnv)
			Human_ID[length(Human_ID)+1] = i
		}
		HN = HN+n
		tmp_1 = Human$id
		Human_ID = Human_ID[-which(Human_ID==tmp_1)]
		if (Human$age>35) Human_ID = Human_ID[-which(Human_ID==Human$age)]
	}
	assign("Human_ID",Human_ID,envir=.GlobalEnv)
	assign("Human_Number",HN,envir=.GlobalEnv)
}
```

#### 6.模拟过程

```R
F_R = Fertility_Ratio
R_G = Relative_Generation
I_H = Initial_Human
T_Y = Total_Year


Human = get("Human",envir=.GlobalEnv)

assign("unmarried_F",c(),envir=.GlobalEnv)
assign("unmarried_M",c(),envir=.GlobalEnv)
	
for (i in 1:I_H) {
	s <- sprintf("Hmn <- Human$new(id=%s,age=%s,
		gender=%s,year_today=%s,fthr=%s,mthr=%s)",
		i,18,sample(c(0,1),1),1,0,0)
		eval(parse(text = s))
		assign(paste("Human_",i,sep=""),Hmn,envir=.GlobalEnv)
}
Human_ID = c(1:I_H)
Human_Number = I_H
assign("Human_ID",Human_ID,envir=.GlobalEnv)
assign("Human_Number",Human_Number,envir=.GlobalEnv)
for (i in 1:T_Y){
	## growth
	for (j in Human_ID){
		s_1 <- sprintf("Human_%s$growth(%s)",j,i)
		eval(parse(text = s_1))
	}
	for (j in Human_ID){
		## checking age and storing unmarried person id
		unmarried_check(j)
		## assign partner
		assign_partner(j)

		##fertility process and Death
		fertility(j,F_R)
	}
	Human_ID = get("Human_ID",envir=.GlobalEnv)
	H_ID_N = length(Human_ID)
	if (i==1){plot(1,I_H,xlim=c(1,10),ylim=c(25,300))}
	if (i!=1){points(i,H_ID_N)}
}
```





