import { getLocations, getGuests, getServices} from "./database.js"

export const Locations = () => {
    let locations = getLocations();

    let locationsHTML = `<div class="large-box">`;

    for (const location of locations) {

        const serviceIds = location.serviceId.split(", ");

        let servicesHTML = "";

        for (const id of serviceIds) {
            const service = getServices().find((s) => s.id === parseInt(id));
            if (service) {
                servicesHTML += `<li>${service.name}</li>`;
            }
        }

        locationsHTML += `<div class="small-box">
        <p><h3 class="locations" data-locationid="${location.id}" data-locationname="${location.name}">${location.name}</h3>
        <ul>${servicesHTML}</ul>
        </p>
        
      </div>`
      
    }

    locationsHTML += `</div>`;

    return locationsHTML;
}

const getGuestsByLocation = (locationId) => {
    const locations = getLocations();
    const location = locations.find(loc => loc.id === Number(locationId));
    const guestIds = location.guestId || [];
    const guests = getGuests();
    return guests.filter(guest => guestIds.includes(guest.id));
};

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("locations")) {
        const locationId = event.target.dataset.locationid;
        const locationName = event.target.dataset.locationname;
        const guests = getGuestsByLocation(locationId);
        const numGuests = guests.length;
        alert(`${numGuests} guests in ${locationName}`);
    }
});
