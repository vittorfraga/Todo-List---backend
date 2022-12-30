const validateTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: "O titulo é obrigatorio" });
  }

  if (body.title === "") {
    return res.status(400).json({ message: "o titulo nao pode ser vazio" });
  }

  next();
};

const validateStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: "O status é obrigatorio" });
  }

  if (body.status === "") {
    return res.status(400).json({ message: "o status nao pode ser vazio" });
  }

  next();
};

module.exports = { validateTitle, validateStatus };
