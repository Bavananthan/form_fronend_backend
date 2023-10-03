import React,{useState} from 'react';

function Form()
{ 
    const [name , setName] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[submitted,setSubmitted] = useState(false);
    const [error,setError] = useState(false);

    const handleName = (e) =>{
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleEmail =(e)=>{
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword =(e)=>
    {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit=(e) =>
    {
        e.preventDefault();
        if(name === ''|| email === ''|| password === '')
        {
            setError(true);
        }
        else{
            setSubmitted(true);
            setError(false);
        }
    }


    const successMessage = () =>
    {
        return (
            <div className='success' style={{
                display: submitted ? '' : 'none',
            }}>
                <h1> user {name} successfully registered!</h1>
            </div>
        )
    }
    const errorMessage =()=>{
        return(
            <div className='error' style={{
                display: error ? '' : 'none',
            }}>
            <h1> please enter all the fields</h1>    
            </div>
        )
    }
    return(
        <div className="form">
            <div>
                <h1> User Registration</h1>
            </div>
            <div className='messages'>
                {errorMessage()}
                {successMessage()}
            </div>
            <form action=''>
                <label className='label' htmlFor='name'>Name</label>
                <input onChange={handleName} className='input' value={name} type='text'></input>

                <label className='label' htmlFor='email'>Email</label>
                <input onChange={handleEmail} className='input' value={email} type='email'></input>

                <label className='label' htmlFor='password'>password</label>
                <input onChange={handlePassword} className='input' value={password} type='password'></input>

                <button onClick={handleSubmit} className='btn btn-success' type='submit'>Submit</button>
                
                <button className='btn btn-default border'>Create Account</button>
            </form>
        </div>
    );
}
export default Form;