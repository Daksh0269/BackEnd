import Concept from '../models/Concept.js';

export const saveGeneratedGraph = async (req, res) => {
  try {
    const { concepts, subject } = req.body;

    if (!concepts || concepts.length === 0) {
      return res.status(400).json({ error: "No concepts provided" });
    }

    // 1. Insert concepts
    const insertedDocs = await Promise.all(
      concepts.map(async (c) => {
        return await Concept.findOneAndUpdate(
          { title: c.title, subject },
          { title: c.title, description: c.description, subject },
          { upsert: true, new: true }
        );
      })
    );

    // 2. Link prerequisites
    for (const concept of concepts) {
      if (concept.prerequisites && concept.prerequisites.length > 0) {
        const prereqDocs = insertedDocs.filter(doc => concept.prerequisites.includes(doc.title));
        const prereqIds = prereqDocs.map(doc => doc._id);

        await Concept.findOneAndUpdate(
          { title: concept.title, subject },
          { prerequisites: prereqIds }
        );
      }
    }

    const finalGraph = await Concept.find({ subject }).populate('prerequisites', 'title');
    res.status(200).json({ success: true, data: finalGraph });
  } catch (error) {
    res.status(500).json({ error: "Failed to save graph to database" });
  }
};