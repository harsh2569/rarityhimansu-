import React from "react";
import { Formik, Form } from "formik";
import Textfield from "../../components/textfield/textfield";
import "./register.scss";
import * as Yup from "yup";

const Register = () => {
  const initialvalues = {};

  const validate = Yup.object({
    email: Yup.string().required("Email is required"),
    collection_name: Yup.string().required("Collection name is required"),
    collection_url: Yup.string().required("Collection URL is required"),
    website_url: Yup.string().required("Website URL is required"),
    official_twitter_url: Yup.string().required("Twitter URL is required"),
    official_discord_url: Yup.string().required("Discord URL is required"),
    description: Yup.string().required("Description is required"),
    status_of_your_project: Yup.string().required(
      "Status of your project is required"
    ),
    maximum_no_of_items: Yup.string().required(
      "Maximum no of items is required"
    ),
    collection_blockchain: Yup.string().required(
      "Collection of blockchain is required"
    ),
    collection_contract_address: Yup.string().required(
      "Collection contract address is required"
    ),
    token: Yup.string().required("Token is required"),
    sale_start_date: Yup.string().required("Sale start date is required"),

    sale_end_date: Yup.string().required("Sale end date is required"),
    reveal_date: Yup.string().required("Reveal date is required"),
    unit_price: Yup.string().required("Unit Price is required"),
  });
  const handleSubmit = () => {};
  return (
    <div>
      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validate}
      >
        {() => (
          <Form>
            <div className="form">
              <div>
                <Textfield label="Email" name="email" type="email"></Textfield>
              </div>
              <div>
                <Textfield
                  label="Collection Name"
                  name="collection_name"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Collection URL"
                  name="collection_url"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Website URL"
                  name="website_url"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Official Twitter URL"
                  name="official_twitter_url"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Official Discord URL"
                  name="official_discord_url"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Description"
                  name="description"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Status of your Project"
                  name="status_of_your_project"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Maxuimum no of Items"
                  name="maximum_no_of_items"
                  type="number"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Collection Blockchain"
                  name="collection_blockchain"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Collection Contract address"
                  name="collection_contract_address"
                  type="text"
                ></Textfield>
              </div>
              <div>
                <Textfield label="Token" name="token" type="text"></Textfield>
              </div>
              <div>
                <Textfield
                  label="Sale start date"
                  name="sale_start_date"
                  type="date"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Sale end date"
                  name="sale_end_date"
                  type="date"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Reveal date"
                  name="reveal_date"
                  type="date"
                ></Textfield>
              </div>
              <div>
                <Textfield
                  label="Unit Price"
                  name="unit_price"
                  type="number"
                ></Textfield>
              </div>

              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
