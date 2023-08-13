
import "dotenv/config";


const getCurrent = (req, res) => {
  const { email, subscription } = req.user;
  res.json({ email, subscription });
};

export default getCurrent;
