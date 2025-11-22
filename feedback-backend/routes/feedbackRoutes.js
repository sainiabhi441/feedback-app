// routes/feedbackRoutes.js
const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// ✅ GET – सभी feedbacks
router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
});

// ✅ POST – नया feedback add करो
router.post("/", async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ PUT – feedback update करो (यह missing था)
router.put("/:id", async(req, res)=> {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true} // इससे updated document वापस मिलेगा
    );
    if(!updatedFeedback) {
      return res.status(404).json({message:"Feedback not found"});
    }
    res.json(updatedFeedback);
  }
   catch (err) 
   {
    res.status(400).json ({message:err.message});
  }
  });

// ✅ DELETE – किसी feedback को delete करो
router.delete("/:id", async (req,res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({message:"Feedback deleted"});
  }
   catch (err)
  {
    res.status(500).json({message: err.message});
  }
});

module.exports = router;
