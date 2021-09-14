
Weather_API = function(Lon, Lat, type = "NA",start_time = "NA", end_time = "NA"){
  ## check input parameters
  if (Lat == "NA" || Lon == "NA") {
    stop("No Lon or Lat")
  }
  Lat = as.numeric(Lat)
  Lon = as.numeric(Lon)
  if (Lat > 54 || Lat < 18 || Lon > 136 || Lon < 73){
    stop("Lat and Lon are limited to [18-54, 73-136]")
  }
  if (!(type %in% c("daily","hourly","current", "historical"))){
    stop("type should be one of ['daily', 'hourly', 'current', 'historical']")
  }
  if (type == "NA") type = "current"
  if (type == "historical"){
    if (start_time == "NA" || end_time == "NA") {
      stop("input start time and end time")
    }
  }
  if (type %in% c("daily","hourly")){
      if (type == "daily"){
        start_time = format(Sys.Date(),"%Y%m%d")
        end_time = format((Sys.Date()+10),"%Y%m%d")
      }else{
        start_time = paste0(format(Sys.Date(),"%Y%m%d"),"00")
        end_time = paste0(format(Sys.Date()+10,"%Y%m%d"),"00")
      }
  }
  tryCatch({
    if (type == "historical"){
      if (as.Date(start_time) > as.Date(end_time)){
        stop("start time larger than end time")
      } else if (as.Date(end_time) > Sys.Date()){
        stop("illegal time input")
      } else if ((type == "hourly" || type == "daily") & start_time < Sys.Date()){
        stop("illegal time input")
      }
      if ((as.Date(end_time) - as.Date(start_time)) >365){
        stop("data more than 365 days are not supported")
      }
    }
  },error = function(e){
    cat("start time or end time illegal, try yyyy/m/d or yyyy-m-d format")
  })
  
  ## set default parameter
  if (type == "historical"){
    col = c("t_avg","t_max","t_min","rh","prec","ws_max",
            "ssh","t_s5","t_s10","t_s20","t_s40","vap")
    result_past<-c()
    for (i in 1:length(col)){
      url<-paste0("http://agr.mlogcn.com/history/day/point/range?",
                  "lon=",Lon,
                  "&lat=",Lat,
                  "&column=",col[i],
                  "&start=",format(as.Date(start_time),"%Y%m%d"),
                  "&end=",format(as.Date(end_time),"%Y%m%d"),
                  "&token=8cc6a3d9ce294a04b1483914bf640ee0"
      )
      result<-fromJSON(getURL(url,.encoding ="UTF-8" ))
      result_past<-cbind(result_past,result$data$value)
      colnames(result_past)[i]<-result$data$column
    }
    result_past<-cbind("datatime"=result$data$datatime,result_past)
    write.csv(result_past, "weather.csv")
    return(result_past)
  }else if(type == "current"){
    url<-paste0("http://data-api.91weather.com/bayer/mix/grid?",
                "lat=",Lat,
                "&lon=",Lon
                )
    result<-fromJSON(getURL(url,.encoding ="UTF-8" ))
    result = unlist(result$data$data[[2]])
    write.csv(result, "weather.csv")
    return(result)
  }else if(type == "daily"){
    url<-paste0("http://data-api.91weather.com/bayer/mix/grid?",
                "lat=",Lat,
                "&lon=",Lon
    )
    result<-fromJSON(getURL(url,.encoding ="UTF-8" ))
    result_daily <- do.call(rbind,result$data$data)
    write.csv(result_daily, "weather.csv")
    return(result_daily)
  }else{
    url<-paste0("http://data-api.91weather.com/bayer/forecast/240?",
                "lat=",Lat,
                "&lon=",Lon,
                "&start=",start_time,
                "&end=",end_time
                )
    result<-fromJSON(getURL(url,.encoding ="UTF-8" ))
    cat(paste("status:",result$status,";message:",result$message,";basetime:",result$data$basetime))
    result_hourly<-c()
    for (i in 1:length(result$data$values)){
      result_hourly<-rbind(result_hourly,unlist(result$data$values[[i]]))
    }
    write.csv(result_hourly, "weather.csv")
    return(result_hourly)
  }
}


requiredPackages = c('RCurl','rjson')
for(p in requiredPackages){
  if(!require(p,character.only = TRUE)) install.packages(p)
  #library(p,character.only = TRUE)
  suppressMessages(require(p, character.only = TRUE, quietly = TRUE))
}


args=commandArgs(T)
Lon = args[1]
Lat = args[2]
type = args[3]
start_time = args[4]
end_time = args[5]
Weather_API(Lon, Lat, type, start_time, end_time)
