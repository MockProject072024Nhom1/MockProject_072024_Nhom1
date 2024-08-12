<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Form-v6 by Colorlib</title>
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- Import tailwind -->
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body class="flex justify-center items-center bg-[#2F2E2E] min-h-screen">
    <div class="flex flex-col justify-center items-center w-[60%]">
        <div class="p-10 rounded-lg shadow-2xl w-full">
            <div class="text-center text-white text-xl font-bold mb-6">
                {{ __('Reset Password') }}
            </div>

            <form method="POST" action="{{ route('password.update') }}">
                @csrf

                <input type="hidden" name="token" value="{{ $token }}">

                <div class="mb-4 flex flex-col">
                    <label for="email" class="w-full md:w-1/3 text-white text-sm font-medium mb-2 md:mb-0 pr-4">
                        {{ __('Email Address') }}
                    </label>

                    <div class="w-full md:w-2/3">
                        <input id="email" type="email"
                            class="form-input w-full px-4 py-2 rounded-lg @error('email') border-red-500 @enderror"
                            name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                        @error('email')
                            <span class="text-red-500 text-sm mt-2">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="mb-4 flex flex-col">
                    <label for="password" class="w-full md:w-1/3 text-white text-sm font-medium mb-2 md:mb-0 pr-4">
                        {{ __('Password') }}
                    </label>

                    <div class="w-full md:w-2/3 relative">
                        <span class="toggle-password cursor-pointer">
                            <i class="fa-regular fa-eye-slash text-black absolute top-3 right-3 bottom-0"></i>
                        </span>
                        <input id="password" type="password"
                            class="form-input w-full px-4 py-2 rounded-lg @error('password') border-red-500 @enderror"
                            name="password" required autocomplete="new-password">

                        @error('password')
                            <span class="text-red-500 text-sm mt-2">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="mb-4 flex flex-col">
                    <label for="password-confirm"
                        class="w-full md:w-1/3 text-white text-sm font-medium mb-2 md:mb-0 pr-4">
                        {{ __('Confirm Password') }}
                    </label>

                    <div class="w-full md:w-2/3 relative">
                        <span class="toggle-password-confirm cursor-pointer">
                            <i class="fa-regular fa-eye-slash text-black absolute top-3 right-3 bottom-0"></i>
                        </span>
                        <input id="password-confirm" type="password" class="form-input w-full px-4 py-2 rounded-lg"
                            name="password_confirmation" required autocomplete="new-password">
                    </div>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="bg-[#00E0FF] text-black font-bold py-2 px-4 rounded-lg">
                        {{ __('Reset Password') }}
                    </button>
                </div>
            </form>

        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const togglePassword = document.querySelector('.toggle-password');
            const togglePasswordConfirm = document.querySelector('.toggle-password-confirm');
            const passwordField = document.getElementById('password');
            const passwordConfirmField = document.getElementById('password-confirm');
            const eyeIcon = togglePassword.querySelector('i');
            const eyeIconPasswordConfirm = togglePasswordConfirm.querySelector('i');

            togglePassword.addEventListener('click', function () {
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);

                // Toggle icon class
                if (type === 'password') {
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                } else {
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                }
            });

            togglePasswordConfirm.addEventListener('click', function () {
                const type = passwordConfirmField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordConfirmField.setAttribute('type', type);

                // Toggle icon class
                if (type === 'password') {
                    eyeIconPasswordConfirm.classList.remove('fa-eye-slash');
                    eyeIconPasswordConfirm.classList.add('fa-eye');
                } else {
                    eyeIconPasswordConfirm.classList.remove('fa-eye');
                    eyeIconPasswordConfirm.classList.add('fa-eye-slash');
                }
            });
        });
    </script>
</body>


</html>