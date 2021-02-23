import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

function Form() {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data) => {
        console.log(data);
    };

    return (
        <div className="form">
            <div className="title">Sign Up</div>
            <form className="inputs" onSubmit={handleSubmit(submit)}> 
                <input 
                    type="text" 
                    name="name" 
                    placeholder="name.."
                    ref={register} 
                />
                <p>{errors.name?.message}</p>

                <input 
                    type="text" 
                    name="age" 
                    placeholder="age.."
                    ref={register} 
                />
                <p>{errors.age && "check wrong length"}</p>

                <input 
                    type="text"
                    name="email" 
                    placeholder="email.."
                    ref={register}  
                />
                <p>{errors.email && "check wrong length"}</p>

                <input 
                    type="password" 
                    name="password" 
                    placeholder="password.."
                    ref={register}  
                />
                <p>{errors.password?.message}</p>

                <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password.."
                    ref={register}  
                />
                <p>{errors.confirmPassword && "check confirm password"}</p>

                <input type="submit" value="submit" className="submit" />
            </form>
        </div>
    )
}

export default Form;
