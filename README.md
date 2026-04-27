# Playwright Hands-On Project

This project demonstrates a complete Playwright setup with **Page Object Model (POM)**, **Cucumber BDD**, and **Data-Driven Testing**.

## 🚀 Features

- ✅ **Page Object Model (POM)** - Clean separation of page logic
- ✅ **Cucumber BDD** - Human-readable test scenarios
- ✅ **Data-Driven Testing** - Multiple test data sets
- ✅ **Custom Fixtures** - Reusable test utilities
- ✅ **TypeScript Support** - Full type safety

## 📁 Project Structure

```
playwright-handson/
├── features/                 # Cucumber feature files
│   └── login.feature        # Login test scenarios
├── src/
│   ├── pages/               # Page Object Model files
│   │   ├── LoginPage.ts     # Login page object
│   │   └── fixtures/        # Custom fixtures
│   │       └── pageFixtures.ts
│   ├── step-definitions/    # Cucumber step definitions
│   │   ├── login.steps.ts   # Login step implementations
│   │   └── world.ts         # Cucumber world setup
│   └── utils/               # Utility functions
│       ├── dataLoader.ts    # Data loading utilities
│       ├── testdata.json    # JSON test data
│       └── testdata.csv     # CSV test data
├── tests/                   # Playwright test files
│   ├── example.spec.ts      # Original test
│   └── login.data-driven.spec.ts # Data-driven tests
├── cucumber.js              # Cucumber configuration
├── tsconfig.json            # TypeScript configuration
└── playwright.config.ts     # Playwright configuration
```

## 🏃‍♂️ Running Tests

### Cucumber BDD Tests (Data-Driven)
```bash
npm run test:cucumber
```

### Playwright Data-Driven Tests
```bash
npm run test:data-driven
```

### Regular Playwright Tests
```bash
npm run test
npm run test:headed  # Run with browser visible
npm run test:ui      # Run with Playwright UI
npm run test:debug   # Debug mode
```

## 📊 Test Data

The project supports multiple data formats:

### JSON Format (`src/utils/testdata.json`)
```json
{
  "loginCredentials": [
    {
      "username": "student",
      "password": "Password123",
      "expectedMessage": "Congratulations student. You successfully logged in!",
      "description": "Valid login"
    }
  ]
}
```

### CSV Format (`src/utils/testdata.csv`)
```csv
username,password,expectedResult
student,Password123,Congratulations student. You successfully logged in!
student,wrongpass,Your password is invalid!
```

## 🔧 Key Components

### Page Object Model
- **LoginPage.ts**: Encapsulates all login page interactions
- Methods for navigation, input, and validation

### Custom Fixtures
- **pageFixtures.ts**: Extends Playwright test with custom page objects
- Provides reusable test utilities

### Cucumber Integration
- **world.ts**: Sets up Playwright browser context for Cucumber
- **login.steps.ts**: Implements Gherkin steps
- **login.feature**: BDD test scenarios with examples

### Data Loading
- **dataLoader.ts**: Utility for loading JSON and CSV test data
- Supports both formats for flexibility

## 🎯 Test Scenarios

The data-driven tests cover:
1. **Valid Login** - Successful authentication
2. **Invalid Password** - Error handling
3. **Invalid Username** - Error handling

## 📈 Reports

- **Cucumber HTML Report**: `cucumber-report.html`
- **Playwright HTML Report**: Run `npx playwright show-report`

## 🛠️ Technologies Used

- **Playwright** - Modern web testing framework
- **Cucumber** - BDD testing framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - JavaScript runtime

## 📝 Adding New Tests

1. **Add test data** to `testdata.json` or `testdata.csv`
2. **Update feature file** with new scenarios
3. **Implement step definitions** if needed
4. **Add page methods** to page objects
5. **Run tests** to verify

This setup provides a scalable, maintainable testing framework for web applications! 🎉

Cucumber report generated:
<img width="799" height="822" alt="image" src="https://github.com/user-attachments/assets/793c452c-5f7d-43e5-b75b-d275d80d133e" />
