import Subscriber from "../models/Subscriber.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// @route  POST /api/newsletter
// @access Public
export const subscribe = async (req, res) => {
  try {
    const email = (req.body.email || "").trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: "You're already subscribed",
      });
    }

    const subscriber = await Subscriber.create({ email });
    res.status(201).json({ success: true, data: subscriber });
  } catch (error) {
    // Handle race-condition duplicate key errors gracefully
    if (error.code === 11000) {
      return res.status(200).json({
        success: true,
        message: "You're already subscribed",
      });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// @route  GET /api/newsletter
// @access Private (admin)
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @route  DELETE /api/newsletter/:id
// @access Private (admin)
export const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res
        .status(404)
        .json({ success: false, message: "Subscriber not found" });
    }
    await subscriber.deleteOne();
    res.json({ success: true, message: "Subscriber removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
