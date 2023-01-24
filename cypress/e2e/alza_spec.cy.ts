import { AlzaMainPage } from '../support/AlzaMainPage.pageObject'
import { AlzaTVSection } from '../support/AlzaTVSection.pageObject'
import { AlzaShoppingCart } from '../support/AlzaShoppingCart.pageObject'

describe('Buy TV test case', () => {
  let alzaMainPage!: AlzaMainPage
  let alzaTVSection!: AlzaTVSection
  let alzaShoppingCart!: AlzaShoppingCart

  const TV_SECTION_TEXT = 'TV, foto, audio-video'
  const MOST_EXPENSIVE_FILTER_TEXT = 'Od nejdražšího'
  const TV_URL = 'tv-foto-audio-video'
  const TEELEVIZE_TEXT = 'Televize'


  before(() => {
    // open Alza home page
    cy.visit('/')
  })

  it('Buy two most expensive televisions', () => {
    // // Wait for the page to be correctly loaded
    // alzaMainPage = new AlzaMainPage()
    // alzaMainPage.alzaLogo.isVisible()

    // // Navigate to TV section
    // alzaMainPage.leftMenuItem.contains(TV_SECTION_TEXT).click()

    // // Check url
    // alzaTVSection = new AlzaTVSection()
    // alzaTVSection.el.url().should('include', TV_URL)

    // // Select TV section
    // alzaTVSection.categoryTile.contains(TEELEVIZE_TEXT).scrollIntoView().click()

    // // Scroll into TV browsing section 
    // alzaTVSection.browsingSection.scrollIntoView().isVisible()

    // // Change filter
    // alzaTVSection.filterTabs.contains(MOST_EXPENSIVE_FILTER_TEXT).click()
    // alzaTVSection.filterTabs.contains(MOST_EXPENSIVE_FILTER_TEXT).el.parents().find('.ui-tabs-tab').should('have.attr', 'aria-expanded','false')

    // // Buy first tv
    // alzaTVSection.buyButton.wait().el.eq(0).scrollIntoView().click()

    // // Check shopping cart 
    // alzaShoppingCart = new AlzaShoppingCart()
    // alzaShoppingCart.productInfo.isVisible()
    // alzaShoppingCart.basketLink.find('.count').shouldHaveText('1')

    // // Click back and continue shopping
    // alzaShoppingCart.backButton.click()
    // alzaTVSection = new AlzaTVSection()
    // alzaTVSection.browsingSection.scrollIntoView().isVisible()

    // // Buy second TV 
    // alzaTVSection.buyButton.wait().el.eq(1).scrollIntoView().click()

    // // Check shopping cart
    // alzaShoppingCart = new AlzaShoppingCart()
    // alzaShoppingCart.productInfo.isVisible()
    // alzaShoppingCart.basketLink.find('.count').shouldHaveText('2')

    cy.wait(1000)
  })
})