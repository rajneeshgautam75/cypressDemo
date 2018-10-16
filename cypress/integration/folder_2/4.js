
describe("online shopping",function(){
  it("CY-4",function(){
    
	  //To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextbox').type('books');
    })  
})