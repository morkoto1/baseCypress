/**
 * CPO - Cypress Page Objects
 * Alza shopping cart page
 */
 import { BaseComponent } from './BaseComponent.cy'

 const PRODUCT_INFO = ".productInfo"
 const BACK_BUTTON = '#varBBackButton'
 const BASKET_LINK = '#basketLink'
 
 export class AlzaShoppingCart extends BaseComponent {
     public productInfo: BaseComponent
     public backButton: BaseComponent
     public basketLink: BaseComponent
 
     constructor() {
         super('body')
 
         this.productInfo = new BaseComponent(`${this.selector} ${PRODUCT_INFO}`)
         this.backButton = new BaseComponent(`${this.selector} ${BACK_BUTTON}`)
         this.basketLink = new BaseComponent(`${this.selector} ${BASKET_LINK}`)
     }
 }
 