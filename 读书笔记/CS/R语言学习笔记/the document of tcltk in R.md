## the document of tcl/tk in R

#### 1.Choosing displaying status

~~~R
require(tcltk)
tclServiceMode(FALSE) 
##code
tclServiceMode(TRUE) 
##the code while render after this
~~~

#### 2.Creating tcl/tk object and setting title

```R
## the basic class of whole tcl/tk object
top <- tktoplevel()     
##display the title of whole tk object
tktitle(top) <- "Plot Demonstration" 
```

#### 3.Creating label 

```R
##dislay message in specific place
msg <- tklabel(top, text="1111111111111")
##set label place by parameter "padx" and "pady"
tkpack(msg, side="left",pady="7",padx="3")
```

![](data:image/jpeg;base64,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vDND5t9eSqs0TRvte5lZSVYAjKkHkd62qKACiiigAooooAK5rxBptx4nuP7KQT2NvasJH1FAUlDleFgP0PzN0wSvJJ29LRQBk6A1xDanTLqxW1ksVWNWgjKwSpztaP06cr1U+oIJ1qKKACue1H/kY5P+vSL/ANCkroa57Uf+Rjk/69Iv/QpKANzz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DR56+hqCigCfz19DWDfuH8RSEZ/wCPWL/0KStesW6/5D8v/XrF/wChSUAbDMEQsc4AycAk/kOtZek64dV1C+tfsM9qLTyyDPgNIHBIO0crwOh555ArWrF0yCaPxVrczxOsUq2/luVIV8K2cHvigB9rr32rxA+lCwuIlW3MyzzDZ5mGC8KfmxnPJA6cZBzRNr3l+ILTSlsLgrcGRftLjYgKruIAPLduQNvPUkEUwwTf8Jytx5T+T/ZhTzNp27vNBxnpnHajVYJpPE2hTJE7RxNP5jqpITMeBk9smhbJ+v5sT3fy/JD9V17+zb20tVsLib7RcRwtNjZHHvOByfvHg8KD05xkUeIde/sGya4FhcXbKNxEY2ooyBlnPA5I4GW9sZIZ4lgmnXS/JieTy9Tgd9ik7VBOScdAPWjxhBNdeFb6G3ieaVlXakalmPzDoBQtvn+iB7/L/Mt6vqn9k2L3ItLi7ZVZhHAvXAycscKowO5HoMnAoj1TfottqP2WaRriJHWCFd7ZYAhc8Dv1OAO5FP1dHl0a+jjVndreQKqjJJKnAApmhxvDoGnRSoySJaxKysMFSEGQR60Lr8v1G+nz/Qi0rW11LQI9We1lhVw5MKgyuNrFcYUHJ47Zo0bWjq1vdzSWUtobW4eBopCHf5QDn5cjPPQE1D4QgmtvDNrDcRPDIrSZSRSpGZGI4PtR4bgmgbV/OiePzNTldN6kblIXBGeo96Fq/l+qF0Xr+jJNJ1w6rqF9a/YZ7UWnlkGfAaQOCQdo5XgdDzzyBSWuvfavED6ULC4iVbczLPMNnmYYLwp+bGc8kDpxkHNM0yCaPxVrczxOsUq2/luVIV8K2cHvigwTf8Jytx5T+T/ZhTzNp27vNBxnpnHahfEvn+TD7L/rqPm17y/EFppS2FwVuDIv2lxsQFV3EAHlu3IG3nqSCKNV17+zb20tVsLib7RcRwtNjZHHvOByfvHg8KD05xkUzVYJpPE2hTJE7RxNP5jqpITMeBk9smjxLBNOul+TE8nl6nA77FJ2qCck46AetHVeq/MHs/n+Q/xDr39g2TXAsLi7ZRuIjG1FGQMs54HJHAy3tjJGvWL4wgmuvCt9DbxPNKyrtSNSzH5h0AraoGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWLdf8h+X/r1i/wDQpK2qxbr/AJD8v/XrF/6FJQBtUVmHWWXrpd5+cX/xdN/t3H/MNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrRWV/bv8A1Dbz/wAh/wDxdH9u/wDUNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrRWV/bv8A1Dbz/wAh/wDxdH9u/wDUNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrRWV/bv8A1Dbz/wAh/wDxdH9u/wDUNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrRWV/bv8A1Dbz/wAh/wDxdH9u/wDUNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrRWV/bv8A1Dbz/wAh/wDxdH9u/wDUNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrRWV/bv8A1Dbz/wAh/wDxdH9u/wDUNvP/ACH/APF0AatFZX9u/wDUNvP/ACH/APF0f27/ANQ28/8AIf8A8XQBq0Vlf27/ANQ28/8AIf8A8XR/bv8A1Dbz/wAh/wDxdAGrWLdf8h+X/r1i/wDQpKlGu5/5ht5/5D/+LqGNpLzVJbo20sCGFEAkK5JBcn7pP94UAXpQPSoCBnoKKKAEwPQUYHoKKKADA9BRgegoooAMD0FGB6CiigAwPQUYHoKKKADA9BRgegoooAMD0FGB6CiigAwPQUYHoKKKADA9BRgegoooAMD0FGB6CiigAwPQUYHoKKKADA9BRgegoooAMD0FGB6CiigAwPQUYHoKKKADA9BRgegoooAMD0FGB6CiigAwPQUYHoKKKADA9BRgegoooAMD0FGB6CiigAwPQUYHoKKKADA9BRgegoooAVQPSrMQHpRRQB//2Q==)

#### 4.Setting place for widget

- 1.by pack

```R
tkpack(msg, side="left",pady="7",padx="3")
```

- 2.by grid: using columnspan control width

```R
tkgrid(tklabel(tt,text="text"),columnspan=3, pady = 9)
```

#### 5.Pop up dialog

```R
tkmessageBox(message=tclvalue(bw))
```

#### 6.Creating buttons

~~~R
butn <- tkbutton(tt, text="submit", command=submit)
~~~

- 1.command is the func triggered by buttons

- 2.the input of function is object, class transfrom is need, recommendation

  ```R
  func = function(...){
      tkmessageBox(message=tclvalue(bw))
  }
  ```

#### 7.Getting input

- 1.getting user input

  ```R
  ##initial variable 
  xvar <- tclVar("")
  ##getting variable input
  x.entry <- tkentry(tt, textvariable=xvar)
  ##getting value from obj
  tclvalue(xvar)
  ```

- 2.getting slider input: input saved in "bw"

  ```R
  fnc = function(...)tkmessageBox(tclvalue(b))
  frm = tkscale(spec.frm, command=fnc, 
          from=0.05, to=2.00,variable=b,resolution=0.05)
  tkpack(frm)
  ```

- 3.getting single-button(radio) input

  ```R
  fm_1 = tkradiobutton(spec, command=fnc, text="N",value=1, variable=b)
  fm_2 = tkradiobutton(spec, command=fnc, text="E",value=2, variable=b)
  tkpack(fm_1,fm_2,anchor="w")
  ```

#### 8.plotting graph in canvas

```R
canvas <- tkcanvas(top, relief="raised", width=40, height=30)
tkcreate(canvas, "line", 100, 250, 400, 250, width=2)
tkcreate(canvas, "text", 225, 20, text="A Simple Plot")
tkpack(canvas, side="top", fill="y")
```

- 1.Creating lines: the first two numbers are coordinate of first point, and the second two numbers are second point
- 2.Creating text: using number to specify location

