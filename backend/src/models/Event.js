import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true,
    enum: ['batalla', 'clase', 'show', 'workshop', 'competencia']
  },
  danceStyles: [{
    type: String
  }],
  date: {
    type: Date,
    required: true
  },
  
      location: {
        name: {
          type: String,
          required: true
        },
        address: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true,
          enum: [
            'CABA',
            'Quilmes',
            'San Isidro',
            'San Fernando',
            'Tigre',
            'Morón',
            'Lomas de Zamora',
            'Lanús',
            'San Miguel',
            'La Matanza',
            'Tres de Febrero',
            'Vicente López',
            'Almirante Brown',
            'Florencio Varela',
            'Berazategui',
            'Esteban Echeverría',
            'José C. Paz',
            'Malvinas Argentinas',
            'Moreno',
            'Ezeiza'
          ]
        },
        country: {
          type: String,
          default: 'Argentina'
        }
      },
  image: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  registeredParticipants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema);