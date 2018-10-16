
describe(" online shopping",function(){
  
  it("CY-11",function(){
    
	//To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextbox').type('books');
    })  
	
	
	it("CY-12",function(){
    
	//To launch Url
      cy.visit('http://www.flipkart.com');
      
	  //To click on close
	cy.get('._29YdH8').click();
    })  
	
	
	
})