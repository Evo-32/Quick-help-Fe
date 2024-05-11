import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword.length === 0 || confirmPassword.length === 0) {
            setErrorNewPassword('Please fill in both password fields.');
            setErrorConfirmPassword('');
            return;
        }
        if (newPassword.length < 7) {
            setErrorNewPassword('New password must be at least 7 characters long.');
            setErrorConfirmPassword('');
            return;
        }
        if (newPassword !== confirmPassword) {
            setErrorConfirmPassword('Passwords do not match.');
            setErrorNewPassword('');
            return;
        }
        setErrorNewPassword('');
        setErrorConfirmPassword('');
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        if (e.target.value.length > 0) {
            setErrorNewPassword('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length > 0) {
            setErrorConfirmPassword('');
        }
    };

    return (
        <div className="bg-[#fafafa] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <form
                    onSubmit={handleResetPassword}
                    action="#"
                    className="bg-yellow-100 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-red-500 text-lg font-medium">
                        Reset password
                    </p>

                    <div className="relative">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            className="bg-white w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue-400 shadow-sm"
                            placeholder="New Password"
                        />
                        {errorNewPassword && <p className="text-red-500 text-center mt-1">{errorNewPassword}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className="bg-white w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue-400 shadow-sm"
                            placeholder="Confirm Password"
                        />
                        {errorConfirmPassword && <p className="text-red-500 text-center mt-1">{errorConfirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
                    >
                        <Link to="/confirm">Reset</Link>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Reset;
