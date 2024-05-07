"use client";
/* 
Notes for Gerald: 
I had to read through Mozilla documentation to understand what wasn't working properly , 
Your previous implementation for the image state was correct only you used a different state to store the image, 

The error we encountered typically occurs when trying to set the value property of a file input element (<input type="file" />).
 File inputs are read-only and their values cannot be set programmatically due to security reasons.

# what i did: I removed the value of the file input , removed it and used the onChange to set a new image
doing this brought up another issue , the image is properly saved in state but the name isn't ,
what could be done would be to conditionally render the image and input field based on whether there is an image or not , i didn't implement that.

# I modified the image handler function to update the id key with an image value , 
# I conditionally rendered the layout excluding it from the create_collector route , that is where this will be displayed

TODO: 
# Migrate from class components to functional components with hooks (ESM React), as functional components provide cleaner and more concise code.
# Respect the figma design , The page is divided into 2 , the image on the left and the form on the right it is not contained and i see you do it


*/
import React, { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: "",
    company: "",
    address: "",
    clientuser: "",
  });

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
    console.log(formData);
  };

  const handleImageChange = (input) => (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      // Store the file object in state
      setFormData({ ...formData, [input]: img });
      // Store the file name separately
      setFormData((prevFormData) => ({
        ...prevFormData,
        [`${input}Name`]: img.name, // Assuming input is "id"
      }));
    }
  };

  return (
    <>
      {step === 1 && (
        <FirstPage
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      )}
      {step === 2 && (
        <SecondPage
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          handleImageChange={handleImageChange}
        />
      )}
    </>
  );
};

export default Signup;
