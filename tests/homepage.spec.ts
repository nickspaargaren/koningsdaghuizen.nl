import { test, expect } from '@playwright/test'

test('Homepage should look the same', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot('homepage.png')
})
