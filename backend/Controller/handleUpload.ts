import { Request, Response } from "express";

interface podcastType {
  title: string;
  description: string;
  thumbnail: string;
  audio: string;
  video: string;
}

const handleUpload = (req: Request, res: Response) => {
  const { title, description, thumbnail, audio, video }: podcastType = req.body;

  if (!title || !description || !thumbnail) {
    return res.status(400).json({ error: "can't have empty field" });
  } else if (!audio && !video) {
    return res.status(400).json({ error: "neither audio or video present" });
  }

  try {
    // Perform saving data to database.. my guess is (this function will have a middleware that will first upload the audio and video then will send it's link as string here .... or.. we can do it here but for that have to change it's type... but i think.. it should be uploaded in frontend and it's link should be sent here)
  } catch (error) {
    return res.status(400).json({ error });
  }
};
