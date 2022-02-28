const response = require('../utils/response');
const CustomError = require('../utils/custom-error');

module.exports = {
  ping: async (req, res) => {
    try {
      res.status(200).send(response('Pong!!!'));
    } catch (error) {
      res.status(500).send(CustomError(error.message));
    }
  },
};
