


export default function form(props) {
    return (
        <div>
            <div>
      <form onSubmit={props.handleSubmit}>
        <h4>Chirp to us!</h4>
        <label>Description:</label>
        <input className="test"
          value={props.text}
          onChange={(e) => props.setText(e.target.value)} />
        <label>Title:</label>
        <input
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)} />
        <label>Price:</label>
        <input
          value={props.price}
          onChange={(e) => props.setPrice(e.target.value)} />
        <label>Image URL:</label>
        <input
          value={props.image}
          onChange={(e) => props.setImage(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
        </div>
    )
}
