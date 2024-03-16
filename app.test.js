import request from "supertest";

import app from "./app.js";

import {getAllMediaDetails} from "./helpers/tmdb.js";
import {getMcuMediaDetails} from "./models/mcu.js";



/*
describe("GET /users", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      message: "I wish we had some information to give you ☹️"
    };
    const actual = await request(app).get("/users");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});
*/

/*
  Test: getAllMediaDetails function from the tmdb.js helper file 
  Data: an array of media objects that contain the id and media_type of the media
  Expected Result: an array of media objects that contain details from the tmdb api about the media type
*/
let mediaIds = [{id:10195,media_type:'movie'}, {id:24428, media_type:'movie'}, {id:1724, media_type:'movie'}, {id:1726, media_type:'movie'}];

describe("functions", function (done) {

  afterAll(() => {
    done();
  })

  test("getAllMediaDetails", async () => {
  
    try {
      const result = getAllMediaDetails(mediaIds);
      expect(result.length).toBeMoreThan(0);
    } catch (error) {
      console.log(error);
    }
  });

  
  test("getMcuMediaDetails", async (done) => {
    try {
      getMcuMediaDetails().then(result => {
        expect(result.length).toBeGreaterThan(0);
      })
    } catch (error) {
      console.log(error);
    }
   
  });
  

});
