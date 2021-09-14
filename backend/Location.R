#### Required Libraries
requiredPackages = c('RCurl','rjson')
for(p in requiredPackages){
  if(!require(p,character.only = TRUE)) install.packages(p)
  #library(p,character.only = TRUE)
  suppressMessages(require(p, character.only = TRUE, quietly = TRUE))
}

#### Amap API
#parameters:address,user_key
#outputs:longitude,latitude

get_Geocode<-function(address){
  key<-"83292d2a9c178748d5e9bfcacd401b62"
  address = URLencode(enc2utf8(address))
  url_head = 'https://restapi.amap.com/v3/geocode/geo?key='
  api_url = sprintf('%s%s&output=json&address=%s',
                    url_head, key, address)
  result = getURL(api_url)
  result = fromJSON(result)
  loc=result$geocodes[[1]]$location
  loc=strsplit(loc,",")[[1]]
  write.csv(loc, "location.csv")
  return(loc)
}

get_Geocode(address=commandArgs(T)[1])