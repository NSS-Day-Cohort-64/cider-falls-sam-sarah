import { Locations } from "./Locations.js"
import { GuestNames } from "./Guests.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>

<h2>Services</h2>
<div class="services-box">
  ${Services()}
</div>

<h2>Locations</h2>
<div class="container">
${Locations()}
</div>
  
  <article class="details">
    <section class="guests-list">
      <h2>Guests</h2>
      ${GuestNames()}
    </section>
  </article>
</div>
`

mainContainer.innerHTML = applicationHTML