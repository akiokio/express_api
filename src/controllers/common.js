export const home = (req, res) => {
  res.send("Hello common route");
};

export const one = (req, res) => {
  res.send("Hello common one");
};

export const post = (req, res) => {
  res.send("Got a POST request");
};
