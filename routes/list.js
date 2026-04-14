const express = require("express");
const router = express.Router();
const contract = require("../services/contract");

router.get("/", async (req, res) => {
  try {
    const count = await contract.complaintCount();
    const complaints = [];
    for (let i = 1; i <= Number(count); i++) {
      const c = await contract.getComplaint(i);
      complaints.push({
        id: Number(c.id),
        title: c.title,
        description: c.description,
        category: c.category,
        status: Number(c.status),
        submittedBy: c.submittedBy,
        timestamp: Number(c.timestamp),
      });
    }
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;