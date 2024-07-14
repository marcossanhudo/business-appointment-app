const appointmentSchema = {
    id: String,
    serviceId: String,
    customerId: String,
    dateTime: Date,
    customerNotes: String,
    status: String  // pending, completed, cancelled
}