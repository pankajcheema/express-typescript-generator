const Joi = require('@hapi/joi');
const testschema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
})

export default testschema;