import { Locations } from "./Locations.js"
import { GuestNames } from "./Guests.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>

<div class="services-box">
  <h2>Services</h2>
  ${Services()}
</div>

<div class="container">
  <div class="large-box">
    <div class="small-box">
      <img src="thumbnail1.jpg" alt="Thumbnail 1">
      <p>Box 1</p>
    </div>
    <div class="small-box">
      <img src="thumbnail2.jpg" alt="Thumbnail 2">
      <p>Box 2</p>
    </div>
    <div class="small-box">
      <img src="thumbnail3.jpg" alt="Thumbnail 3">
      <p>Box 3</p>
    </div>
    <div class="small-box">
      <img src="thumbnail4.jpg" alt="Thumbnail 4">
      <p>Box 4</p>
    </div>
    <div class="small-box">
      <img src="thumbnail5.jpg" alt="Thumbnail 5">
      <p>Box 5</p>
    </div>
    <div class="small-box">
      <img src="thumbnail6.jpg" alt="Thumbnail 6">
      <p>Box 6</p>
    </div>
  </div>
  
  <article class="details">
    <section class="guests-list">
      <h2>Guests</h2>
      ${GuestNames()}
    </section>
    <section class="locations-list">
      <h2>Park Locations</h2>
      ${Locations()}
    </section>
  </article>
</div>
`

mainContainer.innerHTML = applicationHTML