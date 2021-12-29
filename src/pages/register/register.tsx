import React from "react";
import { Formik, Form } from "formik";
import Textfield from "../../components/textfield/textfield";
import "./register.scss";

const Register = () => {
  const initialvalues = {};
  const handleSubmit = () => {};
  return (
    <div>
      <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
