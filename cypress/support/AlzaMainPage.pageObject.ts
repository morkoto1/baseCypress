/**
 * CPO - Cypress Page Objects
 * Alza main page
 */
 import { BaseComponent } from './BaseComponent.cy'

 const ALZA_LOGO = '#logo > a[title="Alza"]'
 const LEFT_MENU_ITEM  = '.leftMenuItem'
 
 export class AlzaMainPage extends BaseComponent {
     public alzaLogo: BaseComponent
     public leftMenuItem: BaseComponent
 
     constructor() {
         super('body')
 
         this.alzaLogo = new BaseComponent(`${this.selector} ${ALZA_LOGO}`)
         this.leftMenuItem = new BaseComponent(`${this.selector} ${LEFT_MENU_ITEM}`)
     }
 }
 