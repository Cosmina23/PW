import '../css/Login.css'

function Login() {
    return(
        <>
        <div className='wrraper1'>
        <h1 className='title'>Login</h1>
        <div>
           <input type='text' className='place' placeholder='Email'/>
           <input type='password' className='place' placeholder='Password'/>
        </div>    
        <div className='btn'>
            <button type='button'>Login</button>
        </div>
        <div>
            <p>Don't have an account?</p>
        </div>
        <img src='cover.png'/>
        </div>
        </>
    )
}

export default Login