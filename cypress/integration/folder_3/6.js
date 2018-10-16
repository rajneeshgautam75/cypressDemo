
describe(" online shopping",function(){
  
  it("CY-7",function(){
    
	//To launch Url
      cy.visit('http://www.amazon.com');
      
	  //To search books
	cy.get('#twotabsearchtextbox').type('books');
    })  
	
	
	it("CY-8",function(){
    
	//To launch Url
      cy.visit('http://www.flipkart.com');
      
	  //To click on close
	cy.get('._29YdH8').click();
    })  
	
	
	
})