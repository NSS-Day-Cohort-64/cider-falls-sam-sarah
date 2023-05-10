import { Locations } from "./Locations.js"
import { GuestNames } from "./Guests.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>

<article class="services">
    <h2>Services</h2>
    ${Services()}
</article>

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
`

mainContainer.innerHTML = applicationHTML

