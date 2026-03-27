import { db } from '../db.js';

export const createProposal = async (req, res) => {
  try {
    const { property_id, user_id, offered_rent, message } = req.body;

    if (!property_id || !user_id || !offered_rent) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const stmt = db.prepare(`
      INSERT INTO proposals (property_id, user_id, offered_rent, message)
      VALUES (?, ?, ?, ?)
    `);

    const result = stmt.run(property_id, user_id, parseFloat(offered_rent), message || '');
    
    const newProposal = db.prepare('SELECT * FROM proposals WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(newProposal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProposalsByProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const proposals = db.prepare(`
      SELECT p.*, u.name as user_name 
      FROM proposals p
      JOIN users u ON p.user_id = u.id
      WHERE p.property_id = ?
      ORDER BY p.created_at DESC
    `).all(propertyId);
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProposalStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // approved, rejected

    const result = db.prepare('UPDATE proposals SET status = ? WHERE id = ?').run(status, id);
    
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Proposal not found' });
    }

    res.json({ message: `Proposal ${status} successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
