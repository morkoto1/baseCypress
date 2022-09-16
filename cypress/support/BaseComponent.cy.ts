/**
 * BaseComponent
 * This is the base component with custom functions
 */
/// <reference types="cypress" />

export class BaseComponent<T extends HTMLElement = HTMLElement> {
	public _element!: Cypress.Chainable<JQuery<T>>
	public selector: string

	constructor(selector: string) {
		this.selector = selector
	}

	public get el(): Cypress.Chainable<JQuery<T>> {
		if (!this._element) {
			this._element = cy.get(this.selector)
		}
		return this._element
	}

	public click(): BaseComponent<T> {
			this.el.scrollIntoView().should('not.be.disabled').and('be.visible').click()
		return this
	}

	public isVisible(): BaseComponent<T> {
		this.el.should('be.visible')
		return this
	}

	public isNotVisible(): BaseComponent<T> {
		this.el.should('not.be.visible')
		return this
	}

	public wait(timeMs = 1000): BaseComponent<T> {
		cy.wait(timeMs)
		return this
	}

	public scrollIntoView(): BaseComponent<T> {
		this.el.scrollIntoView()
		return this
	}

	public contains(text: string | number | RegExp): BaseComponent<T> {
		this.el.contains(text)
		return this
	}

	public reload(): BaseComponent<T> {
		cy.reload()
		return this
	}

	public containsText(text: string | number | RegExp): BaseComponent<T> {
		this.el.should('be.visible').contains(text)
		return this
	}

	public shouldHaveText(text: string) {
		this.el.should('have.text', text).and('be.visible')
		return this
	}

	public find(selector: keyof HTMLElementTagNameMap | string): BaseComponent<T> {
		this.el.find(selector)
		return this
	}
}
