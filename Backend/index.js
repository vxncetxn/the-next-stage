const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const genJwt = require("jsonwebtoken");
const jwt = require("express-jwt");
const jwtDecode = require("jwt-decode");
const { PrismaClient } = require("@prisma/client");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const prisma = new PrismaClient();

const createToken = (admin) => {
  return genJwt.sign(
    {
      sub: admin._id,
      email: admin.email,
    },
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      audience: "api.thenextstage",
      issuer: "api.thenextstage",
    }
  );
};

const requireAuth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  audience: "api.thenextstage",
  issuer: "api.thenextstage",
});

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

    return res.status(201).json({ data: donor });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        code: "500",
        message: "Something went wrong.",
      },
    });
  }
});

app.get("/api/magic/:key", async (req, res) => {
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
        error: {
          code: "404",
          message: "Not found.",
        },
      });
    } else {
      const donor = magic.donor;
      return res.status(200).json({ data: donor });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        code: "500",
        message: "Something went wrong.",
      },
    });
  }
});

app.delete("/api/donor/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await prisma.donor.delete({
      where: {
        id,
      },
    });

    return res.status(204).json({});
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      error: {
        code: "404",
        message: "Invalid ID.",
      },
    });
  }
});

app.post("/api/artefact", async (req, res) => {
  try {
    const { something, somethingTwo } = req.body;

    const artefact = await prisma.artefact.create({
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

    return res.status(201).json({ data: artefact });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        code: "500",
        message: "Something went wrong.",
      },
    });
  }
});

app.get("/api/artefact", async (req, res) => {
  try {
    const artefacts = await prisma.artefact.findMany({ skip: 6, take: 6 });

    return res.status(200).json({ data: artefacts });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        code: "500",
        message: "Something went wrong.",
      },
    });
  }
});

app.get("/api/artefact/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const artefact = await prisma.artefact.findOne({
      where: {
        id,
      },
    });

    if (!artefact) {
      return res.status(404).json({
        error: {
          code: "404",
          message: "Artefact not found.",
        },
      });
    } else {
      return res.status(200).json({ data: artefact });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        code: "500",
        message: "Something went wrong.",
      },
    });
  }
});

app.delete("/api/artefact/:id", requireAuth, async (req, res) => {
  try {
    const id = req.params.id;

    await prisma.artefact.delete({
      where: {
        id,
      },
    });

    return res.status(204).json({});
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      error: {
        code: "404",
        message: "Invalid ID.",
      },
    });
  }
});

app.get("/api/artefacts/count", async (req, res) => {
  try {
    const count = await prisma.artefact.count();

    return res.status(200).json({ data: count });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        code: "500",
        message: "Something went wrong.",
      },
    });
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
});
app.listen(PORT, console.log(`listen to ${PORT}`));
