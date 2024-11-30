function CreatePost(){
    return <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Post Description</label>
      <input type="text" className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}
export default CreatePost;