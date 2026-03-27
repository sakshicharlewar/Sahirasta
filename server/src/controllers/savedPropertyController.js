import { db } from '../db.js';

export const toggleSavedProperty = async (req, res) => {
  try {
    const { property_id, user_id } = req.body;
    
    // Check if it exists
    const existing = db.prepare('SELECT * FROM saved_properties WHERE user_id = ? AND property_id = ?').get(user_id, property_id);
    
    if (existing) {
      db.prepare('DELETE FROM saved_properties WHERE id = ?').run(existing.id);
      return res.json({ message: 'Property unsaved successfully', saved: false });
    } else {
      db.prepare('INSERT INTO saved_properties (user_id, property_id) VALUES (?, ?)').run(user_id, property_id);
      return res.status(201).json({ message: 'Property saved successfully', saved: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSavedProperties = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const saved = db.prepare(`
      SELECT p.*, sp.id as saved_id
      FROM saved_properties sp
      JOIN properties p ON sp.property_id = p.id
      WHERE sp.user_id = ?
      ORDER BY sp.created_at DESC
    `).all(userId);
    
    // Parse json columns
    const formattedSaved = saved.map(prop => ({
      ...prop,
      amenities: JSON.parse(prop.amenities || '[]'),
      commute_times: JSON.parse(prop.commute_times || '{}')
    }));

    res.json(formattedSaved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
