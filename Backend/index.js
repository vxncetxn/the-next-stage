const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const prisma = new PrismaClient();

app.post("/api/donor", async (req, res) => {
  try {
    const { email, nickname } = req.body;

    const donor = await prisma.donor.create({
      data: {
        email,
        nickname,
        magic: {
          create: {},
        },
      },
      include: {
        magic: true,
      },
    });

    if (!donor) {
      return res.status(404).json({
        message: "Something went wrong.",
      });
    } else {
      return res.status(200).json({ message: "Success!", donor });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Something went wrong." });
  }
});

app.get("/api/magic=:key", async (req, res) => {
  try {
    const key = req.params.key;

    const magic = await prisma.magic.findOne({
      where: {
        id: key,
      },
      include: {
        donor: true,
      },
    });

    if (!magic) {
      return res.status(404).json({
        message: "Something went wrong.",
      });
    } else {
      const donor = magic.donor;
      return res.status(200).json({ message: "Success!", donor });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Something went wrong." });
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
});
app.listen(PORT, console.log(`listen to ${PORT}`));
