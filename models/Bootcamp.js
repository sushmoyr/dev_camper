const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Description can not be empty'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    website: {
        type: String,
        /*match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+!#=],
            'Email does not match'
        ]*///TODO: Add match
    },
    phone: {
        type: String,
        maxlength: [20, 'Password can not be more than 20 characters']
    },
    email: {
        type: String,
        //TODO: Match email regex
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        //Geo json point
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must be at most 10'],
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);