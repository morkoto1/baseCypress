/**
 * CPO - Cypress Page Objects
 * Alza Tv section page
 */
 import { BaseComponent } from './BaseComponent.cy'

 const CATEGORY_TILE = ".category-tiles__tile"
 const BROWSING_SECTION = ".browsingitemcontainer"
 const TABS = '#tabs'
 const BUY_BUTTON = '.btnk1'
 
 export class AlzaTVSection extends BaseComponent {
     public categoryTile: BaseComponent
     public browsingSection: BaseComponent
     public filterTabs: BaseComponent
     public buyButton: BaseComponent
 
     constructor() {
         super('body')
 
         this.categoryTile = new BaseComponent(`${this.selector} ${CATEGORY_TILE}`)
         this.browsingSection = new BaseComponent(`${this.selector} ${BROWSING_SECTION}`)
         this.filterTabs = new BaseComponent(`${this.selector} ${TABS}`)
         this.buyButton = new BaseComponent(`${this.selector} ${BUY_BUTTON}`)
     }
 }
 