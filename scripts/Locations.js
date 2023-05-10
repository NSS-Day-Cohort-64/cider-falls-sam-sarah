import { getLocations } from "./database.js"

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

    for (const locations of locations) {
        locationsHTML += `<li class="locations" data-locationid="${location.id}" data-locationname="${location.name}">${location.name}</li>`;
    }

        locationsHTML += "</ul>";

    return locationsHTML;
}