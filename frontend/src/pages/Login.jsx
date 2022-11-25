import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';  //useSelector is used to select sothg frm the state, and if we want to dispatch a function like register, etc., in the reducer, we use useDispatch
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch()

    // We select what we want from our state
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)    //we specify which part of the state we want to get our stuff from );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());    // reset the values above after theyve been checked

    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            // We are setting the form data to an object
            ...prevState,   // we destructure/get all fields in the form
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email, password,
        }

        dispatch(login(userData));
    }

    // Spinner
    if (isLoading) {
        return <Spinner />
    }


  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Let's sign you in</p>
        </section>

        <section className="form">
            <form action="" method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>
                        Login
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login