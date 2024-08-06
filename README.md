# Saucedemo Cypress Test Automation Project
A suite of automation tests written with JavaScript and automated with Cypress JS framework, for the website https://www.saucedemo.com/,

# Project technologies 💻
1.	JavaScript as programming language
2.	Node.js as runtime environment 
3.	Cypress as automation framework for web applications
4.	Google Chrome as test browser

# Setup and installation 🛠️
1. [NodeJS Download and install](https://nodejs.org/en/download/prebuilt-installer)
2. [Setup Environment](https://www.youtube.com/watch?v=Pa-YPdl1rX8&ab_channel=Tutorialspoint)
   
1. Download the Zip code
2. Extract the code

In the project's local folder, I installed the Cypress automatic testing framework from the Command Prompt, by executing the command:
 - "npm i cypress".
After the final installation of Cypress, I had to open it by command line 
- "npx cypress open" 
in Command Prompt and configure the framework for this project: selecting the type of testing for this project (End-to-End Testing), selecting the Google Chrome browser to run the website.

# install cypress-mochawesome-reporter
- from the Command Prompt
1.	npm i --save-dev cypress-mochawesome-reporter
2.	npx cypress run

📌 Demo video of the Automation test 🎬
Below is the video recording of the automation tests execution, made for automated different test cases on Saucedemo.com website.

# Videos
-  [PurchaseProducts](https://drive.google.com/file/d/1DqHF7FPrk1MmyQrtqD9GjSFmNMEfiFdm/view?usp=drive_link)
-  [Login](https://drive.google.com/file/d/1CfQDZL4GJY4NpjbKyxvsFkojv1rn5zqY/view?usp=drive_link)
-  [SortsProducts](https://drive.google.com/file/d/1-Jw6cXEeaqEPttY5vO9eAkwPI-YHMhmO/view?usp=drive_link)

# Report
- [HTML FILE](https://drive.google.com/file/d/1YClYQfFbF14YyaROzOywFx6tHRkS3Cth/view?usp=drive_link)

![ReportsSQA](https://github.com/nafis2610/TestAutomation/assets/90143363/a7963b5f-6d7f-475b-9f17-10a1fd09d4e1)

## Login Suite
![Login Suite](https://github.com/nafis2610/TestAutomation/assets/90143363/a638e703-65cc-4eff-8d40-d8f316c3d874)

## Product Purchase Suite
![ProductPurchaseSuite](https://github.com/nafis2610/TestAutomation/assets/90143363/206c57f2-627a-4e55-b549-1931464a14b4)

## Sort Product Suite
![SortProductPurchaseSuite](https://github.com/nafis2610/TestAutomation/assets/90143363/4b7027dd-fd08-4f82-b87e-cbbedbe2152c)




# Explanation of Login Test Cases

## 1. Testing with valid credentials:
- Objective: Verify that users can successfully log in with  valid  credentials.
- Functionality: The test logs in using the “standard_user” username and the correct password (“secret_sauce”).
- Expected Outcome: The login should succeed without any errors.

## 2. Testing with invalid credentials:
- Objective: Ensure that users cannot log in with an invalid password.
- Functionality: The test attempts to log in with an incorrect username (“standarduser”) and the correct password (“secret_sauce”).
- Expected Outcome: An error message should appear, indicating that the username and password do not match any user in the Service. 

## 3. Testing with locked_out_user: 
- Objective: Confirm that locked-out users cannot log in.
- Functionality: The test tries to log in using the “locked_out_user” username and the correct password (“secret_sauce”).
- Expected Outcome: An error message should be displayed, stating that the user has been locked out.

## 4. Testing with performance_glitch_user:
- Objective: Assess the login performance for the “performance_glitch_user.”
- Functionality: The test logs in using the “performance_glitch_user” username and the correct password (“secret_sauce”).
- Expected Outcome: The login should be successful, and performance metrics (such as time taken) can be measured.
Explanation of Product Purchase Test Cases

# Explanation of Product Purchase Test Cases

## 1. Login Test Case 
- Objective: Verify successful login to the application. 
- Functionality: 
Log in with the username "standard_user" and password "secret_sauce." 
•	Confirm that the login process works as expected. 
•	User gains access to the application. 
- Expected Outcome: After logging in, the user should have access to the application without any errors. 

## 2. Product Details and Add to Cart Test Case 

- Objective: Verify viewing product details and adding a product to the cart. 
- Functionality: 
•	Navigate to the product dashboard. 
•	View details (name, price, description) of a specific product. 
•	Add the product to the cart. 
•	Confirm that the cart count increases. 
- Expected Outcome: The user should be able to view product details, add the product to the cart, and see the updated cart count. 

## 3. Go to Cart Test Case 
- Objective: Verify navigation to the cart page. 
- Functionality: 
•	Navigate to the cart page. 
•	Confirm that the selected product(s) are listed. 
- Expected Outcome: The cart page should display the correct item(s) that were added during the previous step. 

## 4. Checkout Test Case 
- Objective: Verify proceeding to checkout from the cart. - Functionality: 
•	Initiate the checkout process. 
•	Confirm that the user can proceed to the checkout page. 
- Expected Outcome: The user should be able to proceed to the checkout page without any issues. 

## 5. Add User Information Test Case 
Objective: Verify providing necessary information during checkout. 
Functionality: 
•	Input user information (e.g., name, address) during checkout. 
•	Confirm that the application accepts the details. 
Expected Outcome: The application should accept the provided user information without errors. 
## 6. Finish Purchase Test Case 
- Objective: Verify completing the purchase. 
- Functionality: 
•	Finalize the order. 
•	Confirm successful order processing. 
- Expected Outcome: After completing the necessary steps (such as providing user information), the user should be able to finalize the purchase successfully. 
## 7. Purchase Complete Assertion Test Cases 
- Objectives: 
•	Verify confirmation messages after completing the purchase. 
•	Ensure correct messages are displayed. 
- Functionality: 
•	Check if the title message appears: "Thank you for your order!" 
•	Verify the detailed text: "Your order has been dispatched, and will arrive just as fast as the pony can get there!" 
- Expected Outcomes: These messages confirm that the purchase was successful and provide a positive user experience. 


# Explanation of Product Sorting Test Cases

##	1. Test Case: Verify Product Sorting by Name (Z to A)
- Objective: To ensure that the products are correctly sorted in descending order based on their names (from Z to A).
- Functionality:
•	The test navigates to the product dashboard page.
•	It triggers the sorting function to sort the products by name in descending order (Z to A).
- Expected Outcome:
•	The products displayed on the page should be arranged alphabetically from Z to A.
•	The test should pass if the sorting is accurate.

##	2. Test Case: Verify Product Sorting by Name (Low to High)
- Objective: To validate that the products are sorted in ascending order based on their names (from low to high alphabetically).
- Functionality:
•	The test navigates to the product dashboard.
•	It invokes the sorting function to arrange the products by name in ascending order (A to Z).
- Expected Outcome:
•	The products listed on the page should be ordered alphabetically from A to Z.
•	The test should pass if the sorting is correct.

##	3. Test Case: Verify Product Sorting by Name (High to Low)
- Objective: To confirm that the products are sorted in descending order based on their names (from high to low alphabetically).
- Functionality:
•	The test visits the product dashboard.
•	It triggers the sorting mechanism to arrange the products by name in descending order (Z to A).
- Expected Outcome:
•	The products displayed should be sorted alphabetically from Z to A.
•	The test should pass if the sorting is accurate.

## 5. Test Case: Verify Product Sorting by Name (A to Z)
- Objective: To validate that the products are correctly sorted in ascending order based on their names (from A to Z).
- Functionality:
•	The test navigates to the product dashboard.
•	It invokes the sorting function to arrange the products by name in ascending order (A to Z).
- Expected Outcome:
•	The products listed on the page should be ordered alphabetically from A to Z.
•	The test should pass if the sorting is correct.

