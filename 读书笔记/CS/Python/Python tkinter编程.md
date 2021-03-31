## Python tkinter编程

参考链接: https://www.python-course.eu/tkinter_labels.php

##### 1. 通过Entry输入数据

变量输入通过txtvariable绑定, 然后可以在全局使用 `Entry.get()` 获取并使用

```python
E1 = tk.Entry(top,
              textvariable=KyWds)
Button1 = tk.Button(
    top,
    text='''Enter''', 
    command = lambda:print(
        E1.get()
    ))
```

##### 2. 通过拖拽获取文件

最小可行demo如下

```python
import tkinter
from tkinter.messagebox import showinfo
import windnd

def dg_fls(files):
    msg = "\n".join((
        item.decode('gbk') 
        for item in files
    ))
    list.append(msg)
    
list = []
tk = tkinter.Tk()
windnd.hook_dropfiles(tk,
                     func=dg_fls)
tk.mainloop()
```

但是在复杂情况下, 使用拖拽获取文件, 需要新建新的窗口, 代码如下

```python
## 定义获取拖拽文件的代码
def dragged_files(files):
    msg = "\n".join((
        item.decode('gbk') 
        for item in files
    ))
    list.append(msg)
    
## 新建窗口获取和储存文件名
def create():
    tp = Toplevel()
    e1 = tk.Label(tp,
         text='''Drag TXT''')
    e1.place(relx=0.017,
             rely=0.284,
             height=313,
             width=567)
    windnd.hook_dropfiles(
        tp,func=dragged_files)

## 创建其他窗口部件
class Toplevel1:
    def __init__(self, top=None):
        self.Button1 = tk.Button(
            top, 
            text='''select''',
            command=create
        )
        self.Button1.place(
            relx=0.017,
            rely=0.284,
            height=58, 
            width=559
        )
```

同时, 也可以选择直接监视窗口部件

```python
class Toplevel1:
    def __init__(self, top=None):
        self.Button1 = tk.Button(
            top, 
            text='''select'''
        )
        self.Button1.place(
            relx=0.017,
            rely=0.284,
            height=58, 
            width=559
        )
        
        self.Label2 = tk.Label(
            top,
            text='''Drag File'''
        )
        self.Label2.place(
            relx=0.017,
            rely=0.284,
            height=313,
            width=567
        )
        windnd.hook_dropfiles(
            self.Label2,
            func=dg_fls)
```

##### 3. 创建新窗口

```python
#-*- encoding:utf-8 -*-
from tkinter import *
root = Tk()

def create():
    top = Toplevel()

    v1 = StringVar()
    e1 = Entry(
        top,
        textvariable=v1,
        width=10
    )
    e1.grid(
        row=1,
        column=0,
        padx=1,
        pady=1
    )
    
    Button(
        top, 
        text='出现2级'
    ).grid(
        row=1,
        column=1,
        padx=1,
        pady=1
    )

Button(
    root, 
    text='点击1级', 
    command=create
).pack()
mainloop()
```

##### 4. 使用对话框选择文件

```python
def get_flnm():
    filename = filedialog.askopenfilename()
    list.append(filename)

class Toplevel1:
    def __init__(self, top=None):
        self.Btn = tk.Button(
            top,
            command = get_flnm
        )
        self.Btn.place(
            relx=0.863, 
            rely=0.0, 
            height=118, 
            width=69
        )
```

##### 5. 事件绑定

- Button事件: 

    ```python
    <Button-1>#鼠标左键
    <Button-2>#鼠标中建
    <Button-3>#鼠标右键
    ```

- Enter/Leave事件: 指鼠标进入/离开控件

注: bindings使用匿名函数时需指定输出

```python
## 必须有 "e" 或其他名称
Label1.bind(
    '<Button-1>',
    lambda e:print("11")
)
```

##### 6. 动态修改Label字符

需要全局使用的 `tk variable` 需要定义在主函数后, 而不是 `Class` 类中, 这样可以全局使用

```python
def vp_start_gui():
    global val, w, root,txt
    root = tk.Tk()
    txt = tk.StringVar()
    txt.set("Test")
    top = Toplevel1 (root)
    root.mainloop()
    
def dragged_files(files):
    msg = "\n".join((
        item.decode('gbk') 
        for item in files
    ))
    list.append(msg)
    txt.set(" ".join(list))
    
class Toplevel1:
    def __init__(self, top=None):
        top.title("Get Sentence")
        self.Label1 = tk.Label(
            top,
            textvariable=txt
        )
        windnd.hook_dropfiles(
            self.Label1,func=d_f
        )
```

运行效果: 

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCADdAjwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0qiiisTIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAENJSmkqkA6iiipAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAENJSmkqkA6iiipAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAENJSmkqkA6iiipAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAENJSmkqkA6iiipAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoqrb6pp93dS2ltf201xDnzYY5lZ0wcHIByOeOak+123kSXH2iLyYtwkk3jam372T2xg59MUATUVG08KmMNKgMpxGCw+c4zx68An8KkoAKKKZLLHBE800ixxxqWd3OAoHUknoKAH0VXnv7W2kto5ZQrXcnlw4BO9tpbGR7AnmrFABRUFxeQWjQrPJsM8gij4J3MQTjjpwDTbjULO0uI4Li4SJ5VLJvOAQGVevTq6jHfNAFmiql9qunaYEOoX9taCTIQ3Eyx7sdcZPNWIZoriFJoJElikUMjowKsD0II6igB9FFQQ3kE9xcW8Um6W2IWVcEbSRkfXg9qAJ6KKKACio2miWZIWlQSyAsiFhuYDGSB3xkfmKrvq+mJfjT31G1W8bGLczKJDxn7uc9KALlFFFABRRVC213R72V4rXVbK4kjUu6RXCMVUdSQDwBQBforOt9e066e2SGSZmugWiH2aQEqP4jlflXkYY4Bzwa0aACiiigAoqvb3tvdT3EEMm6S1cRzDaRtYqGxz14I6VM7pFG0kjKiKCWZjgADqSaAHUVC13bLDHM1xEIpiojcuNrlvugHvnt61TTxHoUvm+XrWnv5KlpNt0h2LnGTzwMkD8aANKiqVlrWlanI0Vhqdnduo3MsE6yED1IBqa6vILJEe4k2LJIsSnBOWY4UcepNAE9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACGkpTSVSAdRRRUgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWd4gjupvD+oR2W77S1u4j2HDE4PA960aKTGnZ3Oa/tjw+dEaLTNQtrR7S2dkMcPmPZAKQWaPGVx0IIGTx3qLUIZVi1nTod0o1XT3nt8DG6XZscAds5jOPc11VQzWkFxPBPLHukt2LxNkgqSpU/oTx/hTetwTtbyOcj1ix1e80KPTblLmSAtLMsfzGBfJZfnA5U7mAwcHOfQ1mxeJNSTR9QMd+L29hERlnSSJrW3VnwzKyR7lKjJIkUlcZ+YA57uim3d3EtFY4q31PWprK2VdZtpVuNRSBbq2dLg7CjFhu8tEJBHBC8dDnBBtHUJ4vFS6Xeam9zFLiKO2iMJYjy8s0yFA4BOTuQ7enA79XRRdDOVtdRurA6ZpfmNutr6S0mBUMZI1hd4z9SoQ8dwayrDxXqs91cvaXUeoK+nS3MVuWR3jkUrhWWNRs+8fkLu3A5B69W+gWkniBdZeSYzIgVYsgRhgGAfAGS2HYcnGD06VqUX6hp/X9fI4bUdQdtM06503U28RXCX8ZUbolXf5b/KCigD1IOSOPWrEQi129treXUzePNZXccziMRtA5aH5NmMoVPZssO5NdjTJporeF5p5EiijUs7uwVVA6kk9BRf+vlYOxyTa3brqGgXuq3MFo6xXMM7TSKiiVdisMk46g49qrXV/d6fa3N1pTRWenX2oDZcSsIY408v5pASjhQ7jhipBzn+IGuytrW3t2mlt0C/aX82QgkhmwBn8gOn1qSSRIYmlldUjQFmZjgKB1JPahv8Ar8QXkcTda3qdppFndXmtW6wkylpLSaLzbhQRs8syxCOQ9cgBc8EZ6F0mp3Ft4l1INO+m2EssLT37IpMZ8pNqEMCEz3ZhgdOpBHZtcQpEsrzIsbFQrlgASxAXB9yQB9akouBwNnfS6ZBdQf268SNq0iXdxIsJa0QlirkbcLvIA3MCvPAFWZ9eu4rFGj1tTZHUlgXVCkZ8yIxkscgBPlbI3AY+XkHBz2tVb2wivntXlZwbWcTptI5YAjn2+Y0J7fL9Ab3+f6nMR3txNYz6ml4+owaTeCSC82oPPh2gTD5QFbAL8gYJUdwakmsrzV9U1ezgW2W0kureR7hpT5ibUjb5EC4J4GDuGM5wcc9RLJAXW2lePdMrbY2Iy4HXA7jnn60W1vFZ2sVtApWKFAiKWJwoGAMnk0X/AK/r0A4+x1rXLrxC8RvLJSlzIjaa048wRrnB8vytwJAU7jJtOfcAVtN1/Xbi0vLqTUrJ3SxmlltklDyWsgGQNnlKUwcjDs2cd8E131FLpYd9blHSFuRpkUl3ePdTSoJGZkVQpIHChQOPTOT7muQ0O++0+C7ixGu2DuthIVtrZQLiLGc7su2fQ/IOvau9oolrfzFF8tjgYE1HT7iO8tb25vLiDQBLHBIkeJDnhSFQEgHHQ5OOtSWuu6z/AGXd3K6vZXkKiINcwyrcG13Ph3O2KNcKuW2nJGMniuyuL6ztElkubuCFIQGkaSQKEBOATnoCRUNlrmkalMYbDVLK7lC7ikFwjsB64B6ciqvd/wBd2xdP68jmZZIm8QaHdx+JprqBvPjSdvI2SP8AL8gKxgNnpxz8uBgg1f8ACerT301zb3WoG+uIlRpHheJ7dCSeEKqrA8cq4yMdT1Opc+INEs3Ed1rFhA5z8styinglT1PYgj6g1biu7abyvKuIpPPTzItrg+YnHzL6jkcj1FK42czd6nqcupSWcN+1urawtqHWJGZYjbbyBkEZ3c5OfxHFbGhTXF1p0qXk32h4riaAyMgUuquVBIGBnA5wAPatATwlHcSoVjJDtuGFI659MVm/8JZ4b/6GDS//AAMj/wAaXSwP+vx/r5GHosUkmq2+hOGMXh95GLN/ECMQfX5Gb8VqXwJqKy6ZbWZ1jTbhkhOLSFcTxYP8X7w5/wC+R1rq0dJEV0YOjAFWU5BHqKQyxrMsJkQSOpZULDcQMZIHoMj8xTv3DcxNHvbfT9HmnupPLjOpXEYO0n5muXVRx6kiuf1DU3vriBLjWil0msRI2lKseERZgFJ+XfyNrbt2DnjqBXfUUk7NP+ugPr53/G5xo1y8N4//ABOAupC+8kaKUjH7vftzjb5h+T594bb3xjipI9YMv9ove+JG0+6haZfsaxxEWyKcI5VlLnI2nJOCWAHUV11FHSwX1MHwrql7qkFzJqX7i8R1V7HAH2cbRg9Mnd97J47djW9RRQ3cQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACGkpTSVSAdRRRUgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFctpNlpmoJeajqyQy38F3Kkk0zDfahXOxVbrGNu0jGM5zznNdTVSbSdNuL1L6bT7WW6jxsneFTIuOmGIyMULcfQxxPNDqlpqk0trIs00ljM1qSyhd58rcf7wYbT7uaoPNHH4L8Qxu6q63V2hUnkM8hKj6ncuPXIrpbrSrS506axEYgimJYmEBCrk7t44+9u5z60r6Rpkt8t/Lp9rJeJjbcNCpkGOnzYzQgv/X9f1oZb6zfW+u/Z7kRw2Rfy4MW5la4bZuI3q+I2znhk5xwTnjNsvFOu3FjJqMunRR2sllLcwE7Bs2rlRkSs0g5wTtTHtnA6j+zbA3/APaH2K3+2AbftHlL5mMYxuxnpTYtI0yB7h4tOtI2ugROyQKDLnru4+bqetHQFZGHeavrtpY2tzK1mkckTT3E0dq8wtkwuAYxIHYcnLr6D5R1qO+u10qz12NYoZ4ZbR9Qt45Y8xyZH7xSO43YYj/ppXQ3Wl6dfJEl5YW1wsJzGssKuE+mRx+FUfEWgHXooY1u/soUukrCPczxOu10HIAzwc4OCBxTurhHpcztQ8S3tpqkUdpDFLZJdQ2s/wC5I2M5UffLjn5gcKj9OSM8Jd6jfaloWsXMk1pDaCO6gjtvLYzZQMvL7sZ+Unbt4HfvW8+i6VLdi8k020kuRtxO8CmTjGPmxnjA/KnHStNNzNdHT7UzzoY5pfJXfIp4KscZI4HB9KT1Vgi7Wfocqmpz6roEbkRQ28F1ZxC3dT54YTR/M+ThQRyFwcgg55wHakiQeGtS0SVFZLS6hEaMvDQPKpUY7gfMn/AK6l9MsJJ1next2lRFRZDEpYKCGABx0BAIHqM1HdaPZXt2bi5iWYNCYZIZFDRyLuDDcpHJBBx9TVN3f9f10/ES0VjAvpLTwvqU0uj2kaRQ2E1xd2dv8iZG3y2KjhWOGGccgHrtGHQa14na1uBJpsLT7I2gJ8pM7mwfkE7buMkEsucEcV0Vnp1jp0BgsbO3tYmO4xwxKik+uAKii0TSYLSW0h0uzjt5jmWFLdAkn+8oGD+NK47nK6j4haC50jUSReSot1E5W3e3SNsoCXVixRV/iPPAJqxPqesabrF5d3N5bXcFtpQuWgghdFfl/ukyMByOWweO1dRBp9lbLClvZwRLACsQjiVRGD1C4HGe+Kjh0fTLd4Xg020ia3DCFkgVTGG+9twOM5Ocdc0X/r7w6f13MWbWtW06N/tUlheNJp8t3E1tEyKhQA8gu25TuGCNvTpzxC9xqOqiHTL2axf+07JrmA20bA2zqVKkksd4yww2F5HTnjYfw9psenXtpp9la2BvIWid4IFXOQQCQMZxk1Npmj2GkxbbOzt4ZHVRLJFCqGUju2OvU9fWjTX+u/8AwA/r8v8AgmFc6lHF/ZHiiX9ymxrW+Uj7m7sf92VAP+BGsx9LkuJ9EafSrK+ub0XV3NBfHagZ9hGfkblRhenauwTSLNYrqGSITwXUxmeGYB0DHGcAjoSN31Jp99pWnamqLqFha3YjzsE8Kybc9cZHFF/6/rzA5/V5G0uZXe5h0yGHTyYzaKqGMhkXy90gKFSWABKDHtk1W0+/upVmhn1rVb91tg6PbQRLFdE8N5TeUucEjkMRgg56435fDWjyOsgsxDIihEkt3aF41AwFVkIKr/sgge1S2miWlnOJopb5mAIxNqE8q8/7LuQfypdGguYEN3rVp4Rt9Us7mwjgNukq20lmzFA2Pl3iQZxnqRk4561S1ufUbDVbg6leKomtcRS26JCX2AsVQfaRJjJ524JOMsFHPVy6Dp0tpa2jRyi3tFCxxJcSKuBjAYBvnHA+9mpp9LsLhLpZLSI/bU2XBC4aUYxhiOTxxTbVwTOL0nTdSs7y4gu4dRLXEE0scTSH5zwpxm8dSRvH3h/wLiuZRrk3qQLPeGM232dZvObY3IGA327YeeMBsZ425r1CPwvoETs8Wi2Ee+MxuEt1VXUkEhgBg8qOtXWsLV5zM0Cs5hMJz0KE5K46Yovr/XmO/wDX3GRNqUml+GwY/LjurG3R5bW4KmQoOMYRyAzbSFOSM8c1nRaveXtxZatHFC0z2F7JbwFtm3Dw7UdicBsjB6AHjtmujj0bSoQgi020QR7dgWBRt2klcccYJJHoSakGnWKs7LZW4Mm/eREuW343Z45zgZ9cChu7v6iVlY5ybxRe2Gkve3JjuJrS4WO6tEs3hlG5RhUBkYMwzuyCVK5x0zXRaZNNc6Zb3Fw8DySxhy0GfL55G3JORjv368dKbbaRplmIxa6daQCJi0YigVdhIwSMDgkcGrEFvBawrBbQxwxL91I1CqO/AFFxElFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAOoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBDSUppKpAf/9k=) 