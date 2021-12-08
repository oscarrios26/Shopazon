import "./Form.css"


export default function form(props) {
    return (

       <div>
        <div className="back"  style={{ 
        backgroundImage: "url(" + "" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '1500px', height: '850px'
        
        
      }}>
        
        <span class="exampleText">
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
          </span>
          
        </div>
      </div>
      
    )
}



// import "./Form.css"


// export default function form(props) {
//     return (

//       <> <div>
//         <div className="back"  style={{ 
//         backgroundImage: "url(" + "" + ")",
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         width: '1500px', height: '850px'
        
        
//       }}>
        
//         <span class="exampleText">
//         <container id="Final">
//           <form onSubmit={props.handleSubmit} >
//             <h4 className="formTitle">Sell your games here!!</h4>

//             <div className="inputDescription">
              
//               <input id="boxtext"
//               placeholder="Description"
//                 value={props.text}
//                 onChange={(e) => props.setText(e.target.value)} /><br />
//             </div>

//             <div className="inputTitle">
              
//               <input id="boxTitle"
//               placeholder="Title"
//                 value={props.title}
//                 onChange={(e) => props.setTitle(e.target.value)} /><br />
//             </div>

//             <div className='inputPrice'>
              
//               <input id="boxPrice"
//                 placeholder="Price"
//                 value={props.price}
//                 onChange={(e) => props.setPrice(e.target.value)} /><br />
//             </div>

//             <div className="inputImage">
              
//               <input id="boxImage"
//               placeholder="Image URL"
//                 value={props.image}
//                 onChange={(e) => props.setImage(e.target.value)} /><br />
//             </div>
//             <div>
//               <button className="buttonForm" type="submit">Submit!</button>
//             </div>
//           </form>
//           </container>
//           </span>
          
//         </div>
//       </div></>
      
//     )
// }
