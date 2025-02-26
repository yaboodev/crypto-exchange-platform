import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

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
  password: string;
}

const SigninScreen: React.FC = () => {
  const navigate = useNavigate();
  useFormEvents();

  const [formValues, setFormValues] = useState<IFormProps>({
    email: '',
    password: '',
  });

  /**
   * Handles input changes in the sign-in form.
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
   * Handles the form submission for the sign-in screen.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch('https://etoure.com/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Required if using sessions
            body: JSON.stringify(formValues),
        });

        // Check if response is OK before parsing JSON
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'success') {
            alert('Login successful!');
            navigate('/market');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Something went wrong. Please try again.');
    }
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
                    style={{
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                    draggable='false'
                    alt='Crypto Exchange'
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                  />
                </div>
                <h1 className='form-title center'>Members Login</h1>
                <p className='form-desc center'>
                  Hello <strong>Welcome</strong>
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>Email</label>
                        <FormInput
                          type='email'
                          name='email'
                          onChange={handleChange}
                          value={formValues.email}
                          placeholder='Enter your email'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Password</label>
                        <FormInput
                          type='password'
                          name='password'
                          onChange={handleChange}
                          value={formValues.password}
                          placeholder='Write Your Password'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link to='/members/forgot-password'>Forget Password</Link>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                      <FormButton type='submit' text='Sign in' />

                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Don't have an account <Link to='/members/signup'>Signup</Link>
                        </p>
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

export default SigninScreen;
