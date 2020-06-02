## Python监听模拟鼠标键盘

#### 1.监听鼠标和键盘的输入

##### 1.监听方式

```python
from pynput import keyboard,mouse

def on_press(key):
       print('alphanumeric key {0} pressed'.format(key.char))

def on_release(key):
    print('{0} released'.format(key))
    if key == keyboard.Key.esc:# Stop listener
        return False

def on_move(x, y):
    print('Pointer moved to {0}'.format((x, y)))

def on_click(x, y, button, pressed):
    print('{0} at {1}'.format('Pressed' if pressed else 'Released',(x, y)))

def on_scroll(x, y, dx, dy):
    print('Scrolled {0} at {1}'.format('down' if dy < 0 else 'up',(x, y)))

# Collect events until released

keyboard_listener=keyboard.Listener(on_press=on_press,on_release=on_release)
mouse_listener=mouse.Listener(on_click=on_click,on_move=on_move,on_scroll=on_scroll)
lst=[keyboard_listener,mouse_listener]

for t in lst:t.start()

for t in lst:t.join()
```

#####2.另一种方式
```
import PyHook3

def OnMouseEvent(event):
  print('MessageName:',event.MessageName)
  print('Message:',event.Message)
  print('Time:',event.Time)
  print('Window:',event.Window)
  print('WindowName:',event.WindowName)
  print('Position:',event.Position)
  print('Wheel:',event.Wheel)
  print('Injected:',event.Injected)
  print('---')

  # return True to pass the event to other handlers
  # return False to stop the event from propagating
  return True

def OnKeyboardEvent(event):
  print('MessageName:',event.MessageName)
  print('Message:',event.Message)
  print('Time:',event.Time)
  print('Window:',event.Window)
  print('WindowName:',event.WindowName)
  print('Ascii:', event.Ascii, chr(event.Ascii))
  print('Key:', event.Key)
  print('KeyID:', event.KeyID)
  print('ScanCode:', event.ScanCode)
  print('Extended:', event.Extended)
  print('Injected:', event.Injected)
  print('Alt', event.Alt)
  print('Transition', event.Transition)
  print('---')

  # return True to pass the event to other handlers
  # return False to stop the event from propagating
  return True

# create the hook mananger
hm = PyHook3.HookManager()
# register two callbacks
hm.MouseAllButtonsDown = OnMouseEvent
hm.MouseWheel = OnMouseEvent
hm.KeyDown = OnKeyboardEvent

# hook into the mouse and keyboard events
hm.HookMouse()
hm.HookKeyboard()

if __name__ == '__main__':
  import pythoncom
  pythoncom.PumpMessages()

```









#### 2.模拟键盘的输入

##### 1.代码

```python
import win32api
import win32con
win32api.keybd_event(17,0,0,0)  #ctrl键位码是17
win32api.keybd_event(86,0,0,0)  #v键位码是86
win32api.keybd_event(86,0,win32con.KEYEVENTF_KEYUP,0) #释放按键
win32api.keybd_event(17,0,win32con.KEYEVENTF_KEYUP,0)

```

##### 2.键值对应表

```python
字母和数字键     数字小键盘的键       功能键         其它键 
      键   键码      键   键码          键   键码       键      键码 
      A   65          0   96            F1   112       Backspace    8 
      B   66          1   97            F2   113       Tab       9 
      C   67          2   98            F3   114       Clear      12 
      D   68          3   99            F4   115       Enter      13 
      E   69          4   100           F5   116      Shift      16 
      F   70          5   101           F6   117      Control     17 
      G   71         6   102           F7   118      Alt       18 
      H   72         7   103           F8   119      Caps Lock    20 
      I    73          8   104          F9   120      Esc       27 
      J    74          9   105          F10  121     Spacebar    32 
      K   75         *   106           F11  122      Page Up     33 
      L   76         +   107           F12  123      Page Down    34 
      M   77        Enter 108                          End       35 
      N   78         -   109                              Home      36 
      O   79         .   110                              Left Arrow   37 
      P   80         /   111                              Up Arrow    38 
      Q   81                                                Right Arrow   39 
      R   82                                                Down Arrow    40 
      S   83                                                Insert      45 
      T   84                                                Delete      46 
      U   85                                                Help       47 
      V   86                                                Num Lock     144   
      W  87          										win				91
      X   88      
      Y   89      
      Z   90      
      0   48      
      1   49      
      2   50       
      3   51       
      4   52       
      5   53       
      6   54       
      7   55       
      8   56       
      9   57
```



#### 3.另一种方法

```python
from pymouse import PyMouse
from pykeyboard import PyKeyboard

m = PyMouse()
k = PyKeyboard()



#鼠标操作： 
m.click(x,y,button,n) 鼠标点击 
#x,y 是坐标位置 
#buttong 1表示左键，2表示点击右键 
#n 点击次数，默认是1次，2表示双击

m.move(x,y) –鼠标移动到坐标(x,y)

x_dim, y_dim = m.screen_size() –获得屏幕尺寸

#键盘操作：

k.type_string(‘Hello, World!’) –模拟键盘输入字符串 
k.press_key(‘H’) –模拟键盘按H键 
k.release_key(‘H’) –模拟键盘松开H键 
k.tap_key(“H”) –模拟点击H键 
k.tap_key(‘H’,n=2,interval=5) –模拟点击H键，2次，每次间隔5秒 
k.tap_key(k.function_keys[5]) –点击功能键F5 
k.tap_key(k.numpad_keys[5],3) –点击小键盘5,3次

#联合按键模拟 
#例如同时按alt+tab键盘 
k.press_key(k.alt_key) –按住alt键 
k.tap_key(k.tab_key) –点击tab键 
k.release_key(k.alt_key) –松开alt键
```

