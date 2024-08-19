import { createReview, getReviews } from '../services/reviewService.js';

export const create = async (req, res) => {
  try {
    const review = await createReview({ ...req.body, user: req.user.id });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const reviews = await getReviews(req.params.productId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};