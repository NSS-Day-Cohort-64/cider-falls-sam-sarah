const database = {
  locations: [
    { id: 1, name: "Chamfort River ", guestId: "1, 7", serviceId: "1, 2, 3"},
    { id: 2, name: "Lost Wolf Hiking Trail", guestId: "2, 8", serviceId: "4, 5, 6" },
    { id: 3, name: "Lodge", guestId: "3, 9", serviceId: "9, 7, 8, 5" },
    { id: 4, name: "Gander River", guestId: "4", serviceId: "3, 4" },
    { id: 5, name: "Campgrounds", guestId: "5", serviceId: "8, 9, 7" },
    { id: 6, name: "Pine Bluffs ", guestId: "6", serviceId: "4, 5, 10" },
  ],
  guests: [
    { id: 1, name: "Disco Dan" },
    { id: 2, name: "Jazzy Jess" },
    { id: 3, name: "Rockin' Rob" },
    { id: 4, name: "Funky Fred" },
    { id: 5, name: "Boogie Betty" },
    { id: 6, name: "Groovy Greg" },
    { id: 7, name: "Soulful Sally" },
    { id: 8, name: "Electric Eli" },
    { id: 9, name: "Hip Hop Hannah" },
  ],
  services: [
    { id: 1, name: "Rafting" },
    { id: 2, name: "Canoeing" },
    { id: 3, name: "Fishing" },
    { id: 4, name: "Hiking" },
    { id: 5, name: "Picnicking" },
    { id: 6, name: "Rock Climbing" },
    { id: 7, name: "Parking" },
    { id: 8, name: "Information" },
    { id: 9, name: "Lodging" },
    { id: 10, name: "Zip Lines" },
  ],
};

export const getLocations = () => {
  return database.locations.map((locations) => ({ ...locations }));
};

export const getGuests = () => {
  return database.guests.map((guests) => ({ ...guests }));
};

export const getServices = () => {
  return database.services.map((services) => ({ ...services }));
};
