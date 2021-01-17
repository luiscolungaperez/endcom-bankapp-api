exports.success = (req, res, message, status, data) => {
  res.status(status || 200).send({
    statusCode: status,
    message: message,
    ...data
  })
};

exports.failed = (req, res, message, status, details) => {
  console.error(`[response error]: ${details}`);
  res.status(status || 500).send({
    error: message
  })
};
