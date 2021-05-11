import mongoose from 'mongoose';

const shippingSchema = {
    address: { type: String, required: true },
    city: { type: String, required: true  },
    state: { type: String, required: true },
    zipCode: { type: String, required: true  },
    country: { type: String, required: true  },
};

const paymentSchema = {
    paymentMethod: { type: String, required: true }
};

const subItemSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
});

const subSchema = new mongoose.Schema({
    itemsPrice: { type: Number },
  });

const subModel = mongoose.model("Sub", subSchema);

export default subModel;
