# Playwright
Getting start with playwright

## How to setup

### 1. Go to project folder

run the following:
```json
npm init playwright@latest
```

### 2. Add test command to `package.json` file

Run tests in headless mode no browser will open up when running the tests. The results will be shown in terminal.
```json
"test": "npx playwright test",
```
Run test in [headed mode](https://playwright.dev/docs/running-tests#run-tests-in-headed-mode), the browser will open up when running the tests and show the interaction with browser while it testing.

```json
npx playwright test --headed

```

Run tests in UI mode
```json
"test:ui": "npx playwright test --ui"
```

Show test report with UI. By default, the HTML report is opened automatically if some of the tests failed.
```json
"test:report": "npx playwright show-report",
```
Or
```json
"test:report": "npm run test & npx playwright show-report",
```

### 3. Run each command and see the results
