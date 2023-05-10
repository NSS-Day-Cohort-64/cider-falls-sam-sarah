const database = {
    locations: [{id: 1, name: "Chamfort River ", guestId: "", serviceId: "1, 2, 3"},
                {id: 2, name: "Lost Wolf Hiking Trail", guestId: "", serviceId: "4,5,6"},
                {id: 3, name: "Lodge", guestId: "", serviceId: "9,7,8,5"},
                {id: 4, name: "Gander River", guestId: "", serviceId: "3,4"},
                {id: 5, name: "Campgrounds", guestId: "", serviceId: "8,9,7"},
                {id: 6, name: "Pine Bluffs ", guestId: "", serviceId: "4, 5, 10"}],
    guests: [{id: "1", name: "Disco Dan"}, {id: "2", name: "Jazzy Jess"},
    {id: "3", name: "Rockin' Rob"},
    {id: "4", name: "Funky Fred"},
    {id: "5", name: "Boogie Betty"},
    {id: "6", name: "Groovy Greg"},
    {id: "7", name: "Soulful Sally"},
    {id: "8", name: "Electric Eli"},
    {id: "9", name: "Hip Hop Hannah"}],
    services: [{id: 1, name: "rafting" },{id: 2, name: "canoeing" },{id: 3, name: "fishing" },{id: 4, name: "hiking" },{id: 5, name: "picnicking" },{id: 6, name: "rock climbing"},
    {id: 7, name: "parking" },{id: 8, name: "information" },{id: 9, name: "lodging"}, {id: 10, name: "zip lines" }],
}

export const getLocation = () => {
    return database.locations.map(locations => ({...locations}))
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getServices = () => {
    return database.services.map(services => ({...services}))
}