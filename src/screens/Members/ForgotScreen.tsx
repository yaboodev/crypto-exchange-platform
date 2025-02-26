import { useState } from 'react';

import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";

// hooks
import useFormEvents from '../../hooks/useFormEvents';

// components
import Box from '../../components/Common/Box';
import MainLayout from '../../layouts/MainLayout';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';

// interfaces
interface IFormProps {
  email: string;
}

const ForgotScreen: React.FC = () => {
  const { onlyNumbers } = useFormEvents();

  const [formValues, setFormValues] = useState<IFormProps>({
    email: '',
  });

  /**
   * Handles input changes in the forgot password form.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   * @returns {void}
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Handles the form submission for the forgot password screen.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    emailjs
      .send(
        "service_ru8q38h", // Replace with your EmailJS Service ID
        "template_y95oojs", // Replace with your EmailJS Template ID
        { email: formValues.email }, // Send user email
        "wKribUuF-aFz9e6Cm" // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Password reset email has been sent.");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send email. Try again.");
      });
  };

  return (
    <MainLayout>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img
                    draggable='false'
                    alt='Crypto Exchange'
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                  />
                </div>
                <h1 className='form-title center'>Password Reset</h1>
                <p className='form-desc center'>
                Please enter your registered email. We will send you your password reset information.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>email</label>
                        <FormInput
                          type='email' // ✅ Changed type to 'email'
                          name='email'
                          onChange={handleChange}
                          value={formValues.email}
                          placeholder='Email Address'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link to='/'>Login</Link>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Confirm' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                        If you do not have an account <Link to='/members/signup'>Signup</Link>                         </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotScreen;
