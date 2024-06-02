import axios from "axios";
import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
chai.use (chaiJsonSchemaAjv);
import { expect } from "chai";
import { usersSchema } from "../schemas/users-schema.js";


describe ('DUMMYJSON API TESTING - GET METHOD', function() {
    it ('Get data users API testing', async function() {
        const res = await axios.get('https://dummyjson.com/users');
        
        expect(res.status).to.equal(200);
        expect(res.data).to.be.jsonSchema(usersSchema)
    })
})