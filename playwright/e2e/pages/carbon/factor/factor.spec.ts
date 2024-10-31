import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.lightnovel.app/home");

  // await page.waitForLoadState('networkidle');

  const r1 = await page.waitForRequest(
    (request) =>
      request.url().includes("img.lightnovel.life") &&
      request.method() === "GET",
    { timeout: 10000 }
  );

  console.log(r1.url());

  const r2 = await page.waitForRequest(
    (request) =>
      request.url().includes("img.lightnovel.life") &&
      request.method() === "GET",
    { timeout: 10000 }
  );

  console.log(r2.url());

  const r3 = await page.waitForRequest(
    (request) =>
      request.url().includes("img.lightnovel.life") &&
      request.method() === "GET",
    { timeout: 10000 }
  );

  console.log(r3.url());

  await page.waitForTimeout(3000);

  await expect(page.getByText("最近更新")).toHaveCount(1);
});
