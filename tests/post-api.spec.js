import axios from "axios";
import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
chai.use (chaiJsonSchemaAjv);
import { expect } from "chai";
import { usersSchema } from "../schemas/users-schema.js";


describe ('DUMMYJSON API TESTING - POST METHOD', function() {
    it ('Add data user API testing', async function() {
        const newUser = {
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
        };
        const res = await axios.post('https://dummyjson.com/users/add', newUser);
        
        expect(res.status).to.equal(201);
        expect(res.data).to.be.jsonSchema(usersSchema)
    })
})