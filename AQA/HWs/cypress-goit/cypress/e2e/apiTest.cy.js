describe("API Tests for httpbin.org", () => {
  const url = "https://httpbin.org/";

  //by default cy.request is usign GET as a method
  it("GET request to /get", () => {
    cy.request(url + "get").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("url", "https://httpbin.org/get");
      cy.log("Duration time:" + response.duration);
    });
  });

  //using cy.request(Method, url)
  it("GET request to /user-agent", () => {
    cy.request("GET", url + "user-agent").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("user-agent");
      cy.log("Duration time:" + response.duration);
    });
  });

  //using custom Headers
  it("GET request to /user-agent with custom headers", () => {
    cy.request({
      method: "GET",
      url: url + "user-agent",
      headers: {
        "user-agent": "New User Agent",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("user-agent", "New User Agent");
      cy.log("Duration time:" + response.duration);
    });
  });

  //using query parameters
  it("GET request with query parameters", () => {
    cy.request({
      method: "GET",
      url: url + "get",
      qs: {
        id: 13,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.have.property("id", "13");
      cy.log("Duration time:" + response.duration);
    });
  });

  //POST Method cy.request(method, url, body)
  it("POST request to /post", () => {
    cy.request("POST", url + "post", { name: "Post Test" }).then((response) => {
      expect(response.status).to.eq(200); // is not 201 because is not making any changes on the server side
      expect(response.body).to.have.property("json");
      expect(response.body.json).to.have.property("name", "Post Test");
      cy.log("Duration time:" + response.duration);
    });
  });

  //using random parameters
  it('POST request with random parameters', () => {
    const randomParam = Math.random().toString(36).substring(7);
    cy.request('POST', url+'post', { random: randomParam })
      .then((response) => {
        expect(response.body).to.have.property("json");
        expect(response.body.json).to.have.property('random', randomParam);
        cy.log("Random parameter" + JSON.stringify(response.body.json.random));
        cy.log("Duration time:" + response.duration);
      });
  });

  //PUT Method
  it('PUT request to /put',()=>{
    cy.request({
        method: "PUT",
        url: url+"/put",
        body: { name: "Updated"}
    })
        .then((response)=>{
            expect(response.body).to.have.property("json");
            expect(response.body.json).to.have.property('name','Updated');
            cy.log(JSON.stringify(response.body.json.name))
        })
  })

  //PATCH Method
  it('PATCH request to /patch',()=>{
    cy.request({
        method: "PATCH",
        url: url+"/patch",
        body: { name: "Patched"}
    })
        .then((response)=>{
            expect(response.body).to.have.property("json");
            expect(response.body.json).to.have.property('name','Patched');
            cy.log(JSON.stringify(response.body.json.name))
        })
  })

  //DELETE Method
  it('DELETE request to /delete',()=>{
    cy.request('DELETE', url+'delete')
        .then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body.json));
        })
  })

  //easteregg
  it('Easteregg Tony/Ezekiel',()=> {
    cy.request({
        method: "GET",
        url: url+"/status/402",
        failOnStatusCode: false // Prevent Cypress from failing the test on status non-2xx or 3xx
    })
    .then((response) => {
        expect(response.status).to.eq(402); // Assert that the status code is 402
        cy.log('Deleted');
    });
  })

});
