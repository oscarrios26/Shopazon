import "./Form.css"


export default function form(props) {
    return (
        <div >
            <div>
      <form onSubmit={props.handleSubmit} id="final">
        <h4 className="formTitle">Sell your games here!!</h4>

        <div className="inputDescription">
        <label>Description:</label>
        <input id="boxtext"
          value={props.text}
          onChange={(e) => props.setText(e.target.value)} /><br/>
        </div>

        <div className="inputTitle">
        <label>Title:</label>
        <input id="boxTitle"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)} /><br/>
        </div>

        <div className='inputPrice' >
        <label>Price:</label>
        <input id="boxPrice"
          value={props.price}
          onChange={(e) => props.setPrice(e.target.value)} /><br/>
        </div>

        <div className="inputImage">
        <label>Image URL:</label>
        <input id="boxImage"
          value={props.image} 
          onChange={(e) => props.setImage(e.target.value)} /><br/>
        </div>
        <div >
        <button className="buttonForm" type="submit">Submit!</button>
        </div>
      </form>
    </div>
        </div>
    )
}
