const Story = require("../dbSchema");

/**
 * This is a handler for finding single story
 * @param {*} req
 * @param {*} res
 */
const handleFindStory = async (req, res) => {
  const { id } = req.params;
  const Story = await Story.find({id});

  // Sending Story
  res.status(200).json({
    data: findStory,
    error: { code: null, message: null },
  });
};

module.exports = handleFindStory;
