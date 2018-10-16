
describe(" two e-commers",function(){
  
  it("CY-5",function(){
    
	//To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextboxd').type('books');
    })  
	
	
	it("CY-6",function(){
    
	//To launch Url
      cy.visit('http://www.flipkart.com');
      
	  //To click on close
	cy.get('._29YdH8s').click();
    })  
	
	
	
})