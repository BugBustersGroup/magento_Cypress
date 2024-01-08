import WomanJacketsPage from "../pageObjects/WomanJacketsPage";
class HomePage {
  getWomanMainMenuLink = () => cy.get("#ui-id-4");
  getWomanTopsLink = () => cy.get("#ui-id-9");
  getWomanJacketsLink = () => cy.get("#ui-id-11");
  getHomePageLogo = () => cy.get("a.logo");
  getTitleName = () => cy.get('a.logo img');
  getImageBoxButton = () => cy.get('span[class="action more button"]');
  getImageBoxesLinks = () => cy.get('span[class="action more icon"]');

  hoverWomanMainMenuLink() {
    this.getWomanMainMenuLink().trigger("mouseover");

    return this;
  }

  hoverWomanTopsLink() {
    this.getWomanTopsLink().trigger("mouseover");

    return this;
  }

  clickWomanJacketsLink() {
    this.getWomanJacketsLink().click();

    return new WomanJacketsPage();
  }
}

export default HomePage;
