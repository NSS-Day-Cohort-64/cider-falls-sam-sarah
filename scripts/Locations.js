import { getLocations, getGuests } from "./database.js"

export const Locations = () => {
    let locations = getLocations();

    locations = locations.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    let locationsHTML = "<ul>";

    for (const location of locations) {
        locationsHTML += `<li class="locations" data-locationid="${location.id}" data-locationname="${location.name}">${location.name}</li>`;
    }

        locationsHTML += "</ul>";

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
  