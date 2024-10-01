import Input from '@/components/Input';
import { useCallback, useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.jpg" alt="logo" className="h-12" />
                </nav>
                <div className="justify-center flex">
                    <div className="bg-black bg-opacity-70 px-16 py-16 items-center mt-10 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white font-semibold text-4xl mb-8">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(ev) => setName(ev.target.value)} 
                                    id="name"
                                    value={name} 
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev) => setEmail(ev.target.value)} 
                                id="email"
                                type="email"
                                value={email} 
                            />
                            <Input
                                label="Password"
                                onChange={(ev) => setPassword(ev.target.value)} 
                                id="password"
                                type='password'
                                value={password} 
                            />
                        </div>
                        <button className='bg-red-600 text-white rounded-md block w-full px-3 py-3 mt-4'>
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                        <p className='text-neutral-500 mt-12'>
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span 
                                onClick={toggleVariant}
                                className='text-white ml-1 hover:underline cursor-pointer'
                            >
                                {variant === 'login' ? 'Create an account' : 'Sign in'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
