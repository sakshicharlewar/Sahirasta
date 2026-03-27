import express from 'express';
import { 
  createProposal, 
  getProposalsByProperty, 
  updateProposalStatus 
} from '../controllers/proposalController.js';

const router = express.Router();

router.post('/', createProposal);
router.get('/property/:propertyId', getProposalsByProperty);
router.patch('/:id/status', updateProposalStatus);

export default router;
