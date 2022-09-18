## DataFrame转图片

#### 1、引入包

```python
import dataframe_image as dfi
import matplotlib.pyplot as plt
```

#### 2、DataFrame转图片

```python
df_styled = tmp.style
dfi.export(df_styled,  "./static/res/res.png", max_rows=-1) 
attachfilepath_2 = "./static/res/res.png"
```

