
describe("online shopping",function(){
  it("CY-3",function(){
    
	  //To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextboxdf').type('books');
    })  
})