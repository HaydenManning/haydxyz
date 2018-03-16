let getUserByAuthId = (req, res) => {
  req.app
    .get("db")
    .getUserByAuthId(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let getAllUsers = (req, res) => {
  req.app
    .get("db")
    .getAllUsers()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let createNewUser = (req, res) => {
  let x = req.params;
  req.app
    .get("db")
    .createNewUser(x.auth_id, x.f_name, x.l_name, x.email, x.user_role)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let deleteUser = (req, res) => {
  req.app
    .get("db")
    .deleteUser(req.params.auth_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let updateUserFirstName = (req, res) => {
  req.app
    .get("db")
    .updateUserFirstName(req.body.f_name, req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let updateUserLastName = (req, res) => {
  req.app
    .get("db")
    .updateUserLastName(req.body.l_name, req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let updateUserRole = (req, res) => {
  req.app
    .get("db")
    .updateUserRole(req.body.user_role)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let updateUserEmail = (req, res) => {
  req.app
    .get("db")
    .updateUserEmail(req.body.email, req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  getUserByAuthId,
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUserFirstName,
  updateUserLastName,
  updateUserRole,
  updateUserEmail
};
