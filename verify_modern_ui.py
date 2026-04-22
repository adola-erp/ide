import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            # Test Home Page Desktop
            print("Navigating to home page...")
            await page.goto("http://localhost:5175/index.html", wait_until="networkidle")

            # Print body to debug
            content = await page.content()
            # print(content[:1000])

            print("Waiting for .hero-section...")
            await page.wait_for_selector(".hero-section", timeout=10000)
            await page.screenshot(path="home_modern_desktop.png")
            print("Desktop screenshot saved.")

            # Test Home Page Mobile
            print("Testing mobile...")
            mobile_context = await browser.new_context(
                viewport={'width': 375, 'height': 812},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
            )
            mobile_page = await mobile_context.new_page()
            await mobile_page.goto("http://localhost:5175/index.html", wait_until="networkidle")
            await mobile_page.wait_for_selector(".mobile-footer", timeout=10000)
            await mobile_page.screenshot(path="home_modern_mobile.png")
            print("Mobile screenshot saved.")

            # Test Profile Page
            print("Testing profile...")
            await page.goto("http://localhost:5175/profile.html", wait_until="networkidle")
            await page.wait_for_selector(".modern-title", timeout=10000)
            await page.screenshot(path="profile_modern.png")
            print("Profile screenshot saved.")

        except Exception as e:
            print(f"Error occurred: {e}")
            await page.screenshot(path="error_debug.png")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
