
describe(" two e-commers",function(){
  
  it("CY-15",function(){
    
	//To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextboxs').type('books');
    })  
	
	
	it("CY-16",function(){
    
	//To launch Url
      cy.visit('http://www.flipkart.com');
      
	  //To click on close
	cy.get('._29YdH8s').click();
    })  
	
	
	
})