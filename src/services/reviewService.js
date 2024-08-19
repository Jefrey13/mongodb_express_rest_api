import Review from '../models/reviewModel.js';

export const createReview = async (reviewData) => {
  const review = new Review(reviewData);
  await review.save();
  return review;
};

export const getReviews = async (productId) => {
  return await Review.find({ product: productId }).populate('user');
};