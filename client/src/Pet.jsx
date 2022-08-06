export default function Pet() {
  return (
    <div class="col">
      <div class="card shadow-sm">
        {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        <img width="100%" height="225" src="https://placekitten.com/200/139" alt="#" />
        <div class="card-body">
          <p class="card-text">This is an amazing cat! i don't know what make it so amazing yet.......</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            </div>
            <small class="text-muted">some info</small>
          </div>
        </div>
      </div>
    </div>
  )
}