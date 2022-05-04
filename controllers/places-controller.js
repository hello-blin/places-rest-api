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

module.exports = { getPlaceById, getPlaceByUserId };
