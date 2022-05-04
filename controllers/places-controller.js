const DUMMY_PLACES = [
  {
    id: "p1",
    name: "Prishtina",
    description: "The capital city of Kosovo, largest city in Kosovo.",
    location: {
      lat: 42.66066397045114,
      lang: 21.175643842862385,
    },
    address: "Rruga Robert Doll, NR.158, 10000",
    creator: "u1",
  },
  {
    id: "p2",
    name: "Gjakova",
    description: "The oldest city and with a really rich culture on itself.",
    location: {
      lat: 42.38024874905271,
      lang: 20.42714469838844,
    },
    address: "Xhamia e hadumit, 11000",
    creator: "u2",
  },
  {
    id: "p3",
    name: "Drenas",
    description: "A city placed in Drenica's region.",
    location: {
      lat: 42.625027622866114,
      lang: 20.895505802405385,
    },
    address: "Rruga e Jasharajve, NR.123, 13000",
    creator: "u3",
  },
];

const getPlaceById = (req, res, next) => {
  const place = DUMMY_PLACES.find((p) => p.id === req.params.pid);
  if (!place) {
    throw new HttpError("Couldnt find a place by the provided ID.");
  }
  res.status(200).json({ place });
  console.log("Get request to /api/places/pid");
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => p.creator === userId);
  if (!place) {
    return next(new HttpError("Couldnt find a place by the provided user ID."));
  }
  res.json(place);
};

const createPlace = (req, res, next) => {
  const place = {
    id: `p`,
    name: "Prishtina",
    description: "The capital city of Kosovo, largest city in Kosovo.",
    location: {
      lat: 42.66066397045114,
      lang: 21.175643842862385,
    },
    address: "Rruga Robert Doll, NR.158, 10000",
    creator: "u1",
  };
};

module.exports = { getPlaceById, getPlaceByUserId };
