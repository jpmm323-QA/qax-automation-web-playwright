import { test, expect } from '@playwright/test';

test.describe('Feature: Validar navegación al formulario de registro en ParaBank', () => {

  test('Escenario: Verificar el título de la página de registro', async ({ page }) => {

    // Paso 1️⃣ - Dado que el usuario abre la página principal
    await test.step('Dado que el usuario abre la página principal de ParaBank', async () => {
      await page.goto('https://parabank.parasoft.com/parabank/index.htm');
      await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    });

    // Paso 2️⃣ - Cuando hace clic en el enlace "Register"
    await test.step('Cuando hace clic en el enlace "Register"', async () => {
      await page.click('a[href*="register.htm"]');
      await expect(page).toHaveURL(/register.htm/);
    });

    // Paso 3️⃣ - Entonces la página debe mostrar el título correcto
    await test.step('Entonces la página debe mostrar el título esperado', async () => {
      await expect(page).toHaveTitle('ParaBank | Register for Free Online Account Access');
    });

  });
});
