import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// hooks
import useFormEvents from '../../hooks/useFormEvents';

// components
import Box from '../../components/Common/Box';
import MainLayout from '../../layouts/MainLayout';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
import FormCheckbox from '../../components/Forms/FormCheckbox';

// interfaces
interface IFormProps {
  email: string;
  phone: string;
  password: string;
  password1: string;
  name: string;
  lastname: string;
  citizenship: boolean;
  identityType: string;
  identityNumber: string;
  day: string;
  month: string;
  year: string;
  country: string;
  operator: string;
  agreeToPolicies1: boolean;
  agreeToPolicies2: boolean;
  agreeToPolicies3: boolean;
}

const SignupScreen: React.FC = () => {
  const { onlyNumbers, onlyEmail } = useFormEvents();
  const navigate = useNavigate(); // Initialize navigate here

  const [formValues, setFormValues] = useState<IFormProps>({
    email: '',
    phone: '',
    password: '',
    password1: '',
    name: '',
    lastname: '',
    citizenship: false,
    identityType: '',
    identityNumber: '',
    day: '',
    month: '',
    year: '',
    country: '',
    operator: '',
    agreeToPolicies1: false,
    agreeToPolicies2: false,
    agreeToPolicies3: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validate the form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.password) newErrors.password = 'Password is required';
    if (formValues.password !== formValues.password1)
      newErrors.password1 = 'Passwords do not match';
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.lastname) newErrors.lastname = 'Last name is required';
    if (!formValues.phone) newErrors.phone = 'Phone number is required';
    if (!formValues.agreeToPolicies1)
      newErrors.agreeToPolicies1 = 'You must agree to the first policy';

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    const validationErrors: Record<string, string> = {};

    // Email validation
    if (!formValues.email.trim()) {
        validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
        validationErrors.email = "Enter a valid email address";
    }

    // Password validation
    // if (!formValues.password.trim()) {
    //     validationErrors.password = "Password is required";
    // } else if (formValues.password.length < 8) {
    //     validationErrors.password = "Password must be at least 8 characters long";
    // } else if (!/[A-Z]/.test(formValues.password) || !/[0-9]/.test(formValues.password)) {
    //     validationErrors.password = "Password must contain at least one uppercase letter and one number";
    // }

    // Confirm password validation
    if (!formValues.password1.trim()) {
        validationErrors.password1 = "Confirm Password is required";
    } else if (formValues.password !== formValues.password1) {
        validationErrors.password1 = "Passwords do not match";
    }

    // Name validation
    if (!formValues.name.trim()) {
        validationErrors.name = "Name is required";
    } else if (formValues.name.length < 2) {
        validationErrors.name = "Name must be at least 2 characters long";
    }

    // Last name validation
    if (!formValues.lastname.trim()) {
        validationErrors.lastname = "Last name is required";
    } else if (formValues.lastname.length < 2) {
        validationErrors.lastname = "Last name must be at least 2 characters long";
    }



    // Policy agreement validation
    if (!formValues.agreeToPolicies1) {
        validationErrors.agreeToPolicies1 = "You must agree to the terms and conditions";
    }

    // If there are errors, update state and stop submission
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    // Clear errors if all validations pass
    setErrors({});

    // Prepare data for API
    const formData = {
        email: formValues.email,
        password: formValues.password,
        name: formValues.name,
        lastname: formValues.lastname,
        phone: formValues.phone,
    };

    try {
        const response = await fetch("https://etoure.com/signup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log("API Response:", result);

        if (result.status === "success") {
            alert("Signup successful!");

             // Debug navigate function
        console.log("navigate function:", navigate);
        if (typeof navigate !== "function") {
            console.error("navigate is not a function!");
            return; // Stop execution if navigate is undefined
        }
        
            console.log("Navigating to /market...");
            window.location.replace("/market"); // Try force reload

        setTimeout(() => {
            navigate("/market"); // Try navigating with React Router
        }, 500); 
            
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
};




  return (
    <MainLayout>
      <div className='flex flex-center'>
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
                <h1 className='form-title center'>Create an account</h1>
                <p className='form-desc center'>
                  Please enter the information below. We will send your activation information to
                  your phone number.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>Your email address</label>
                        <FormInput
                          type='email'
                          name='email'
                          onKeyDown={onlyEmail}
                          onChange={handleChange}
                          value={formValues.email}
                          placeholder='Your email address'
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Your password</label>
                        <FormInput
                          type='password'
                          name='password'
                          onChange={handleChange}
                          value={formValues.password}
                          placeholder='Your password'
                        />
                        {errors.password && <p className='error'>{errors.password}</p>}
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password1'>Verify your password</label>
                        <FormInput
                          type='password'
                          name='password1'
                          onChange={handleChange}
                          value={formValues.password1}
                          placeholder='Confirm Password'
                        />
                        {errors.password1 && <p className='error'>{errors.password1}</p>}
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='name'>Your name</label>
                        <FormInput
                          type='text'
                          name='name'
                          onChange={handleChange}
                          value={formValues.name}
                          placeholder='Your name'
                        />
                        {errors.name && <p className='error'>{errors.name}</p>}
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='lastname'>Last Name</label>
                        <FormInput
                          type='text'
                          name='lastname'
                          onChange={handleChange}
                          value={formValues.lastname}
                          placeholder='Last Name'
                        />
                        {errors.lastname && <p className='error'>{errors.lastname}</p>}
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='phone'>Phone</label>
                        <FormInput
                          type='text'
                          name='phone'
                          onKeyDown={onlyNumbers}
                          onChange={handleChange}
                          value={formValues.phone}
                          placeholder='Enter your phone number'
                        />
                        {errors.phone && <p className='error'>{errors.phone}</p>}
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies1'
                          onChange={handleCheckboxChange}
                          checked={formValues.agreeToPolicies1}
                          text={`I have read the KVKK Information Text and accept the user agreement.`}
                        />
                        {errors.agreeToPolicies1 && (
                          <p className='error'>{errors.agreeToPolicies1}</p>
                        )}
                      </div>
                    </div>

                    <div className='form-line'>
                    <div className='form-line'>
  <div className='buttons'>
  <FormButton type="submit" text="Create an account" />
  </div>
  <button onClick={() => navigate("/market")}>Go to Market</button>
</div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Do you have an account? <Link to='/'>Log in</Link>.
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

export default SignupScreen;
