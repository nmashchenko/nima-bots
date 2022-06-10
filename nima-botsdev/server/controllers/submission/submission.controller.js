const Order = require("../../models/Order");
const isEmpty = require("lodash/isEmpty");

const submitForm = async (req, res) => {
  try {
    console.log(req.body);
    const { tgusername, request } = req.body

    const order = await Order.create({
      tgusername,
      request,
    })

    if (isEmpty(order)) {
      return res.status(500).json({
        message: "Failed to create record, please try again.",
      })
    }

    res.status(200).json({
      message: "Success!",
    })
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong, try again please!" + err,
    })
  }
}

module.exports = {
  submitForm,
}
