Feature: Product checkout e2e

    Scenario: Verify that new user is able to create account
        Given I am a new user
        When I open the site "http://automationpractice.com/"
        And I click on link text "Sign in"
        Then I should see create account button present
        When I create account with my email id

    Scenario: Verify that new user is able register after entering personal information
        And I fill in my personal information

    Scenario: Verify that correct name is shown on the landing page after successful registration
        And I verify correct account name is shown on the page

    Scenario: Verify user is able to logout successfully
        And I logout

    Scenario: Verify user is able to login successfully
        When I login

    Scenario: Verify user is able to search a product and add add it to the cart
        And I search product "Faded Short Sleeve T-shirts"
        And I click on the search result
        And I add item to cart

    Scenario: Verify user is able to checkout the product and navigate till payments page
        And I proceed to checkout

    Scenario: Verify that correct product details are shown in the payments page
        And I verify the product "Faded Short Sleeve T-shirts" is shown in the payments page
        And I choose payment option
        And I confirm the order
        And I verify checkout success message "Your order on My Store is complete."
