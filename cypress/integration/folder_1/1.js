
describe("online shopping",function(){
  it("CY-1",function(){
    
	  //To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextbox').type('books');
    })  
})