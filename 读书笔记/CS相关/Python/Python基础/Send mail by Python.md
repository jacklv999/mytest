## Send mail by Python

```python
import smtplib, ssl
from email.message import EmailMessage

msg = EmailMessage()
msg.set_content("The body of the email is here")
msg["Subject"] = "An Email Alert"
msg["From"] = "XXX"
msg["To"] = "XXX"

password = 'XXX'
smtp_server = 'smtp-mail.outlook.com'


context=ssl.create_default_context()

with smtplib.SMTP(smtp_server, port=587) as smtp:
    smtp.starttls(context=context)
    smtp.login(msg["From"], password)
    smtp.send_message(msg)
```

#### send html mail

```python
msg = MIMEText('<html><body><h1>Hello</h1>' +
    '<p>send by <a href="http://www.python.org">Python</a>...</p>' +
    '</body></html>', 'html', 'utf-8')
```

