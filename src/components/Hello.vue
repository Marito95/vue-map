<template>
  hello
  <section class="cta">
    <div class="cta-content">
      <div class="container px-5">
        <h2 class="text-white display-1 lh-1 mb-4">
          Data matters only when interpreted.
          <br />
        </h2>
        <a
          class="btn btn-outline-light py-3 px-4 rounded-pill"
          href="#/map"
          
          >View <Map></Map
        ></a>
      </div>
    </div>
  </section>
  <section>
    <div class="row text-center">
      <div class="row mb-5">
        <div class="col">
          <h1>Features</h1>
        </div>
      </div>
      <div class="col">
        <h3>Location Tracking</h3>
        <br />
        <i class="fa-solid fa-map-location"></i>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quaerat magnam quae aut reiciendis rerum consequuntur sit laudantium
          ratione labore?
        </p>
      </div>
      <div class="col">
        <h3>Activity Measurement</h3>
        <br />
        <i class="fa-solid fa-chart-line"></i>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia et
          distinctio quia, odio blanditiis, itaque iusto suscipit iure nisi
          perspiciatis cumque iste soluta, aliquid ipsa.
        </p>
      </div>
      <div class="col">
        <h3>Data Interpretation</h3>
        <i class="fa-solid fa-microscope"></i>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquam
          at natus totam consequuntur quidem?
        </p>
      </div>
    </div>
  </section>
  <section id="contact-form">
    <div class="text-center">
      <div class="row">
        <div class="col-6 px-5">
          <div class="card">
            <div class="card-body">
              <div class="text-left">
                <div class="form-group">
                  <label for="">First name</label>
                  <input type="name" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Email</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Phone Number</label>
                  <input type="name" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">First name</label>
                  <textarea type="name" class="form-control" rows="15">
                  </textarea>
                </div>
                <div class="mr-0 w-100">
                    <div class="form-group w-100">
                        <button class="btn btn-success w-100">Submit</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 px-5" style="color: white">
          <h1 class="mb-5">Contact Us</h1>
          <i class="fa-solid fa-id-card"></i>
          <p>
            Our Team will go over your inquiry. It normally takes up to 7 days
            to hear from us. Sit tight and Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error recusandae, alias id consectetur
            ut veniam amet sapiente repellat repellendus sunt ad consequatur
            ipsam reiciendis libero facilis itaque. Assumenda, atque facere.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
div {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande";
}
#contact-form {
  background: rgb(8, 61, 104);
  background: linear-gradient(rgb(4, 4, 138), rgb(8, 61, 104));
}
i {
  color: rgb(8, 61, 104);
}
.col-6 > i {
  color: white;
}
p {
  padding: 2em 5em;
  font-size: 1.2em;
}
.form-group {
  padding: 1em;
}
.text-left {
  text-align: left;
}
</style>