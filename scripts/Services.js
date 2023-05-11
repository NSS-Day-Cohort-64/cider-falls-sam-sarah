import { getLocations, getServices } from "./database.js";

const serviceFunction = getServices();
const locationFunction = getLocations();

export const Services = () => {
  let html = "<ul>";

  html += "<p>We have the following services:</p>";

  for (const service of serviceFunction) {
    html += `<li data-type="services" data-id="${service.id}" data-name="${service.name}">${service.name}</li>`;
  }

  html += "</ul>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "services") {
    const serviceId = itemClicked.dataset.id;
    const serviceName = itemClicked.dataset.name;
    let matchingLocations = "";
    for (const location of locationFunction) {
      if (location.serviceId.split(", ").includes(serviceId)) {
        matchingLocations += `${location.name}\n`;
      }
    }
    if (matchingLocations) {
      window.alert(`${serviceName} is available at:\n${matchingLocations}`);
    } else {
      window.alert(`${serviceName} is not available at any location.`);
    }
  }
});
