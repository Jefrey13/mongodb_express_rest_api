import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  carrier: {
    type: String,
    required: true,
  },
  trackingNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['in transit', 'delivered', 'cancelled'],
    default: 'in transit',
  },
  estimatedDelivery: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Shipping = mongoose.model('Shipping', shippingSchema);

export default Shipping;