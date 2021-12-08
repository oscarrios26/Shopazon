import "./Form.css"


export default function form(props) {
    return (

     
        
        <div class="exampleText">
        <h4 className="terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h4>
        <div id="Final">
          <form onSubmit={props.handleSubmit} >
            <h4 >Sell your games here!!</h4>

            
              
              <input id="hello"
              placeholder="Description"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)} /><br />
            

           
              
              <input 
              id="titleinput"
              placeholder="Title"
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)} /><br />
            

            
              
              <input 
              id="priceinput"
                placeholder="Price"
                value={props.price}
                onChange={(e) => props.setPrice(e.target.value)} /><br />
            

           
              
              <input 
              id="imageinput"
              placeholder="Image URL"
                value={props.image}
                onChange={(e) => props.setImage(e.target.value)} /><br />
            
            
              <button id="buttoninput" type="submit">Submit!</button>
            
          </form>
          </div>
          </div>
          
      
      
    )
}





              
