import axios from "axios";
import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
chai.use (chaiJsonSchemaAjv);
import { expect } from "chai";
import { usersSchema } from "../schemas/users-schema.js";


describe ('DUMMYJSON API TESTING - PUT METHOD', function() {
    it ('Update data user API testing', async function() {
        const updateUser2 = {
            lastName: 'Owais'
        };
        const res = await axios.post('https://dummyjson.com/users/2/', updateUser2);
        
        expect(res.status).to.equal(200);
        expect(res.data).to.be.jsonSchema(usersSchema)
    })
})