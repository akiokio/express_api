import { downloadFile } from "../utils/downloader";

export const home = (req, res) => {
  res.send("Hello common route");
};

export const one = (req, res) => {
  res.send("Hello common one");
};

export const post = (req, res) => {
  res.send("Got a POST request");
};

export const downloader = async (req, res) => {
  if (!req.query.url) {
    res.status(400).send("url param is required");
  }

  try {
    const fileContent = await downloadFile(req.query.url);
    res.send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
