const Story = require("../dbSchema");
const updateStory = require("../domain/updateStory");

/**
 * This is a handler for deleting  stories
 * @param {*} req
 * @param {*} res
 */
const handleDeleteStory = async (req, res) => {
  const { id } = req.params;
  const deleteStory = await Story.findByIdAndDelete(id);

  // Sending Story
  res.status(200).json({
    data: deleteStory,
    error: { code: null, message: null },
  });
};

module.exports = handleDeleteStory;
