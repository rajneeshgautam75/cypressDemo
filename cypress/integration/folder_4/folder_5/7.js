
describe(" online shopping",function(){
  
  it("CY-9",function(){
    
	//To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextboxs').type('books');
    })  
	
	
	it("CY-10",function(){
    
	//To launch Url
      cy.visit('http://www.flipkart.com');
      
	  //To click on close
	cy.get('._29YdH8s').click();
    })  
	
	
	
})