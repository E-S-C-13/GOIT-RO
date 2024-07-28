class HomePage {
  get burgerMenuButton() {
    return cy.get("#open-navigation-menu-mobile");
  }

  get navigationMenu() {
    return cy.get('nav[role="menu"]');
  }

  get logoutButton() {
    return this.navigationMenu.contains("button","Log out")
  }

  verifyBurgerMenuButton() {
    this.burgerMenuButton.should("be.visible");
  }

  verifyNavigationMenu(){
    this.navigationMenu.should("be.visible");
  }
  
  verifyLogoutButton(){
    this.logoutButton.scrollIntoView().should("be.visible");
  }

}


export default HomePage;
