/**
 * Created by Neha on 1/12/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    desc     : String,
    read: Boolean
});

mongoose.model('Notifications', notificationSchema, 'Notifications');
