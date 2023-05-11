import { getGuests } from "./database.js";

const guests = getGuests()

export const GuestNames = () => {
    let html = "<ul>"

    for (const  guest of guests) {
        html += `<li data-id="guests">${guest.name}</li>`
    }

    html += "</ul>"
    return html
}
