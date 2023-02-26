// import wedding model
const Wedding = require('../models/weddings');

// get all weddings (async)
async function getWeddings(req, res, next) {
  try {
    // await all weddings and assign to weddings
    const weddings = await Wedding.find({});
    // respond in json format with weddings
    res.json(weddings);
  } catch (err) {
    // if there is an error log it
    console.log(err);
    // send status 500 in json format
    res.status(500).json({ error: 'server error' });
  }
}

// get a wedding by id
async function getWedding(req, res, next) {
  // get id from req.params.id (the id number in the url)
  const id = req.params.id;
  try {
    // await finding wedding by id and assign to wedding
    const wedding = await Wedding.findById(id);
    // respond with status 200 and json wedding
    res.status(200).json(wedding);
  } catch (err) {
    // if there is an error log it
    console.log(err);
    // send status 500 in json format
    res.status(500).json({ error: 'server error' });
  }
}

// create a wedding
async function createWedding(req, res, next) {
  // destructure all fields from the request body (req.body)
  const {
    name,
    email,
    date,
    venue,
    decoration,
    catering,
    photographer,
    videographer,
  } = req.body;
  // use the wedding model to create a new wedding using fields
  const newWedding = new Wedding({
    name,
    email,
    date,
    venue,
    decoration,
    catering,
    photographer,
    videographer,
  });

  try {
    // await saving the new wedding
    await newWedding.save();
    // once saved respond
    res.json(newWedding);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
}

// update wedding
async function updateWedding(req, res) {
  // extract id from req.params
  const id = req.params.id;
  const {
    name,
    email,
    date,
    venue,
    decoration,
    catering,
    photographer,
    videographer,
  } = req.body;

  try {
    const wedding = await Wedding.findByIdAndUpdate(id);
    if (!wedding) {
      return res.status(400).json({ error: 'Wedding not found' });
    }
    wedding.name = name;
    wedding.email = email;
    wedding.date = date;
    wedding.venue = venue;
    wedding.decoration = decoration;
    wedding.catering = catering;
    wedding.photographer = photographer;
    wedding.videographer = videographer;

    await wedding.save();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function deleteWedding(req, res) {
  const id = req.params.id;
  try {
    const wedding = await Wedding.findByIdAndDelete(id);
    if (!wedding) {
      return res.status(404).json({ error: 'Wedding not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  getWeddings,
  createWedding,
  getWedding,
  updateWedding,
  deleteWedding,
};
