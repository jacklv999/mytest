## Playwright Guide

MS launch a new web spider project named `playwright`, which can generate python web spider code by recording user’s behavior. 

#### 1. installation

```bash
pip install --upgrade pip
pip install playwright
playwright install
```

#### 2. Example

sync example

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(
        "http://playwright.dev"
    )
    print(page.title())
    browser.close()
```

async example

```python
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright(
    ) as p:
        b = await p.chromium.launch()
        page = await b.new_page()
        await page.goto(
            "http://a.dev"
        )
        print(
            await page.title()
        )
        await browser.close()

asyncio.run(main())
```

#### 3. Recoding scripts

```bash
playwright codegen wikipedia.org
```



