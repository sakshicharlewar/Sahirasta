import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'sahirasta_secret_heritage_key';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user exists
    const existingUser = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    
    const result = db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run(
      name, email, passwordHash
    );
    
    const token = jwt.sign({ id: result.lastInsertRowid }, JWT_SECRET, { expiresIn: '7d' });
    
    res.status(201).json({ 
      token, 
      user: { id: result.lastInsertRowid, name, email } 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({ 
      token, 
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email,
        workplace_lat: user.workplace_lat,
        workplace_lng: user.workplace_lng,
        workplace_address: user.workplace_address
      } 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = db.prepare('SELECT id, name, email, workplace_lat, workplace_lng, workplace_address FROM users WHERE id = ?').get(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { workplace_lat, workplace_lng, workplace_address } = req.body;
    db.prepare('UPDATE users SET workplace_lat = ?, workplace_lng = ?, workplace_address = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(
      workplace_lat, workplace_lng, workplace_address, req.userId
    );
    res.json({ message: 'Profile updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
