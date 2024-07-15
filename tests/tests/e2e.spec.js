import { test, expect } from '@playwright/test';

test('Validate Title', async ({ page }) => {
	await page.goto('http://localhost:3000');

  	// Expect a title "to contain" a substring.
  	await expect(page).toHaveTitle('Portfolio Website');
});

test('Validate Navbar links', async ({ page }) => {
  	await page.goto('http://localhost:3000');

	// Validate all links on navbar
	const homeLink = page.getByText('Home');
	const aboutLink = page.getByText('About');
	const skillsLink = page.getByText('Skills');
	const educationLink = page.getByText('Education');
	const experienceLink = page.getByText('Experience');
	const projectLink = page.getByText('Projects');
	const resumeLink = page.getByText('Resume');
	const coverletterLink = page.getByText('Cover Letter');
});