# Playwright-Automation
Basic Template for Playwright Automation Tests in Javascript

This open-source project was created during discovery of best-fit tool for Icon web application
<div align="center">
  <img src="https://www.perfecto.io/sites/default/files/image/2022-09/social-blog-cypress-vs-playwright.jpg"><br>
</div>


## Pre-requisites

* Playwright requires Node.js version 14 or above. If you are using node version less than 14 then you can download Node.js version 14 or above from nvm (nvm allows you to easily switch between node versions depending on the project)

  * If you are not using nvm already, you can download it and install Node.js from [here](https://catalins.tech/node-version-manager-macos/)

## Setup

* Clone e2e-tests repository using following command:
```
git clone git@github.com:mahnoorfatiima/Playwright-Automation.git
```
* `cd` into `Playwright-Automation` and run the below commmands:
```
npm ci
npx playwright install
```

## Playwright Commands

* To run all tests use `npx cross-env ENV=VF_PROD playwright test` This would run all tests on VF production environment

* You can change environment as per the requirement. Following are the configured environment values:

  * `VF_PROD`, `VF_QA`, `CM_PROD`, `CM_QA`, `CM_LOC`
  * `VF_PROD`, `VF_QA` point to one domain and `CM_PROD`, `CM_QA`, `CM_LOC` point to different domain


* To run a single test spec file use `npx cross-env ENV=VF_PROD playwright test login.spec.js`

* To run multiple test spec files use `npx cross-env ENV=VF_PROD playwright test login.spec.js addTemplate.spec.js`

* To run a single test inside spec file use test title `npx cross-env ENV=VF_PROD playwright test -g "Unsuccessful login"`

* By default tests run in headless mode if you want to run in headed browser add `--headed` at the end on your command

  * For example use `npx cross-env ENV=VF_PROD playwright test --headed`


#### Test Recording

* To record a test use codegen command along with the URL of website you want to record tests for. The URL is optional and you can always run the command without it and then add the URL directly into the browser window instead. 

  * For recording use `npx playwright codegen https://portal.voicefriend.net/login`


#### Reports

* Playwright config is setup to use HTML reporter by default. Html reporter show detailed information about the test failures with screenshots and traces. Html report is generated automatically after test run is executed
<img width="541" alt="html-test-failure" src="https://github.com/caremerge/e2e-tests/assets/56622464/10ac0cea-114b-4999-8fa7-a2d4ed9839a6">

* Use command `--reporter=line,allure-playwright` at the end of your tests to generate data in allure-results folder

* Now, you can view allure report using `allure serve`

<img width="1435" alt="allure-report" src="https://github.com/caremerge/e2e-tests/assets/56622464/7ac741c8-45f4-453a-a596-748cc7b0dfc4">
  
## Key Findings

* **Speed Comparison:** Playwright took ~28s, ~31s, ~33s  to run all 3 tests and averaged ~31 seconds. It was even more faster with paralell execution

* **Test Framework:** Playwright is more flexible and gives you more control over the test runner framework you choose

* **Additional Downloads:** Playwright has a native API for handling iframes or mobile device emulations without requiring any additional downloads or plugins.   

* **Test Recording:** Playwright uses codegen command to run the test generator followed by the URL of the website you want to generate tests for.
```npx playwright codegen```

* **Navigating to new Domain:** Playwright provides built-in support for cross-domain testing, making it easier to test scenarios that involve interactions between different domains or origins.

## Why Playwright

Based on the specific scope of my web application, Playwright has proven to be the most suitable choice. The selection between Playwright and Cypress depends on the system's requirements, considering factors such as browser support and the complexity of testing scenarios. Playwright's versatility and comprehensive browser compatibility make it ideal for diverse testing needs, while Cypress offers simplicity and ease of use for straightforward scenarios. It is crucial to evaluate these frameworks in relation to your project's unique demands to make an informed decision.

## Explore Cypress

* Key findings for Cypress can be found [here](https://github.com/mahnoorfatiima/Cypress-Automation) 
