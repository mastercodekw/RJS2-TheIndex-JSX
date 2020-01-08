import React from "react";
import authors from "./data";

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <div id="sidebar">
            <img src="theindex.svg" class="logo" alt="the index logo" />
            <section>
              <h4 class="menu-item active">
                <button>AUTHORS</button>
              </h4>
            </section>
          </div>
        </div>
        <div class="content col-10">
          <div class="authors">
            <h3>Authors</h3>
            <div class="row">
              {authors.map(author => (
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="card">
                    <div class="image">
                      <img
                        class="card-img-top img-fluid"
                        src={author.imageUrl}
                        alt={author.first_name + " " + author.last_name}
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">
                        <span>
                          {author.first_name} {author.last_name}
                        </span>
                      </h5>
                      <small class="card-text">
                        {author.books.length} books
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
