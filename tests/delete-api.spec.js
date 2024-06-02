import axios from "axios";
import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
chai.use (chaiJsonSchemaAjv);
import { expect } from "chai";
import { usersSchema } from "../schemas/users-schema.js";


describe ('DUMMYJSON API TESTING - DELETE METHOD', function() {
    it ('Delete data users API testing', async function() {
        const res = await axios.delete('https://dummyjson.com/users/1');
        
        expect(res.status).to.equal(200);
        expect(res.data).to.be.jsonSchema(usersSchema)
    })
})