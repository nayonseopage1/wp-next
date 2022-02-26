import React, { useState } from "react";
import Layout from '../src/component/Layout';
import getNavData from '../src/inc/getNavData';
import Footer from '../src/component/Footer';
import footerData from '../src/inc/footerData';

const About = ({headerMenu,footerOutput}) => {

    const [query, setQuery] = useState({
        name: "",
        email: ""
      });
  
  // Update inputs value
    const handleParam = () => (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
  
    // Form Submit function
    const formSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("https://getform.io/f/4bc223e4-3669-46e1-9e59-54887ad820fb", {
        method: "POST",
        body: formData
      }).then(() => setQuery({ name: "", email: "", message: "" }));
    };

    return (

        <Layout headerMenu={headerMenu}>      

                <div className="contact-form">
                    <h1>Contact Form Next Js</h1>
                    <form onSubmit={formSubmit}>
                        <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="form-control"
                            value={query.name}
                            onChange={handleParam()}
                        />
                        </div>
                        <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            className="form-control"
                            value={query.email}
                            onChange={handleParam()}
                        />
                        </div>
                        <div>
                        <label>Message</label>
                        <input
                            type="text"
                            name="message"
                            required
                            placeholder="Message"
                            className="form-control"
                            value={query.message}
                            onChange={handleParam()}
                        />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                    </div>



                <Footer footerOutput={footerOutput} ></Footer>
        </Layout>

    );
};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        footerOutput : await footerData()
      }
    }
}

export default About;