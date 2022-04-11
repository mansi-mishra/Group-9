import React from "react"
import Layout from "../components/Layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Contact</h2>{" "}
        <div class="form-box">
          <h1>Simple Contact Form</h1>
          <form method="post">
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control" id="name" type="text" name="Name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control"
                id="email"
                type="email"
                name="Email"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                class="form-control"
                id="message"
                name="Message"
              ></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
