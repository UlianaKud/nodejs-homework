import { User } from "../../models/index.js";
import path from "path";
import Jimp from "jimp";
import fs from "fs";

const updateAvatar = async (req, res) => {
  const { _id: owner } = req.user;
  const { filename, path: oldPath } = req.file;
  const avatarURL = path.join("public", "avatars", filename);

  Jimp.read(path.join("tmp", filename), async (err, file) => {
    if (err) {
      throw err;
    }

    file.resize(250, 250).write(avatarURL);
    await fs.unlink(oldPath, (err) => {
      if (err) throw err;
    });
    const result = await User.findByIdAndUpdate(
      owner,
      { avatarURL },
      { new: true }
    );
    res.status(201).json(result);
  });
};

export default updateAvatar;
