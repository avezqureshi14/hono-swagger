const getDummyMessage = (req, res) => {
    res.json({ message: 'Hello, this is a dummy endpoint!' });
};

const createDummyMessage = (req, res) => {
    const { message } = req.body;
    res.status(201).json({ message });
};

module.exports = { getDummyMessage, createDummyMessage };
