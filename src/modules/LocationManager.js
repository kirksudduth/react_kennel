const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then((results) =>
      results.json()
    );
  },
  getAllWithEmployees() {
    return fetch(`${remoteURL}/locations?_embed=employees`).then((result) =>
      result.json()
    );
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    }).then((data) => data.json());
  },
  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedLocation),
    }).then((data) => data.json());
  },
};
