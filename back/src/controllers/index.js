const userController = (req, res) => {
    res.status(200).send("Estamos recbiendo una solicitud a users")
};

const postController = (req, res) => {
    res.status(200).send("Estamos recbiendo una solicitud posts")
}

module.exports = {
  userController,
  postController
};
