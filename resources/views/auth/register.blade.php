<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Register</title>
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- Import tailwind -->
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body class="form-v6 h-screen flex justify-center items-center bg-[#2F2E2E]">
    <div class="bg-[#C8C8C8] w-full h-full rounded-lg font-nunito font-bold flex justify-center items-center">
        <div class="form-right bg-[#2F2E2E] w-[60%] h-full flex flex-col items-center justify-center p-8">
            <img class="w-1/2 h-auto object-cover" src="src/assets/images/logo.png" alt="form">
            <h1 class="text-4xl font-normal text-[#7d8084] mb-4">Welcome to NSGSecure</h1>
            <h1 class="text-3xl font-normal text-gradient">Enter into a NEW World of Surveillance</h1>
        </div>
        <form class="form-left bg-[#2F2E2E] p-10 m-20 w-[40%] h-3/4 flex flex-col justify-center rounded-md shadow-2xl"
            action="{{ route('register') }}" method="POST">
            @csrf
            <h1 class="text-white text-[50px] text-center mb-4">{{ __('REGISTER') }}</h1>
            <div class="flex justify-between gap-4 mb-4">
                <div class="w-1/2">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-user "></i>
                        <label class="block mb-1 font-normal text-xl text-[#7d8084]"
                            for="first_name">{{ __('First Name') }}</label>
                    </div>
                    <input
                        class="w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md @error('first_name') is-invalid @enderror"
                        type="text" name="first_name" id="first_name" placeholder="Enter your first name"
                        value="{{ old('first_name') }}" required autocomplete="first_name" autofocus>
                    @error('first_name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="w-1/2">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-user "></i>
                        <label class="block mb-1 font-normal text-xl text-[#7d8084]"
                            for="last_name">{{ __('Last Name') }}</label>
                    </div>
                    <input
                        class="w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md @error('last_name') is-invalid @enderror"
                        type="text" name="last_name" id="last_name" placeholder="Enter your last name"
                        value="{{ old('last_name') }}" required autocomplete="last_name" autofocus>
                    @error('last_name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-user "></i>
                <label class="block mb-1 font-normal text-xl text-[#7d8084]"
                    for="email">{{ __('Email Address') }}</label>
            </div>
            <div class="flex items-start justify-between w-full mb-4">
                <input
                    class="w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md @error('email') is-invalid @enderror"
                    type="email" name="email" id="email" placeholder="Enter your email" value="{{ old('email') }}"
                    required autocomplete="email">
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-lock"></i>
                <label class="block mb-1 font-normal text-xl text-[#7d8084]" for="password">{{ __('Password') }}</label>
            </div>
            <div class="flex items-start justify-between w-full mb-4 relative">
                <span class="toggle-password cursor-pointer">
                    <i class="fa-regular fa-eye-slash text-white absolute top-3 right-3 bottom-0"></i>
                </span>
                <input
                    class=" w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md @error('password') is-invalid @enderror"
                    type="password" name="password" id="password" placeholder="Enter your password" required
                    autocomplete="new-password">
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-lock"></i>
                <label class="block mb-1 font-normal text-xl text-[#7d8084]"
                    for="password-confirm">{{ __('Confirm Password') }}</label>
            </div>
            <div class="flex items-start justify-between w-full mb-4 relative">
                <span class="toggle-password cursor-pointer">
                    <i class="fa-regular fa-eye-slash text-white absolute top-3 right-3 bottom-0"></i>
                </span>
                <input
                    class=" w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md"
                    type="password" name="password_confirmation" id="password-confirm" placeholder="Enter your password"
                    required autocomplete="new-password">
            </div>
            <div class="mb-4">
                <div>
                    <input type="checkbox" required>
                    <label class="text-[16px] text-[#7d8084] font-normal">I agree with <span class="underline">Terms and
                            Policies</span></label>
                </div>
            </div>
            <div class="text-center mb-4">
                <input type="submit" name="register"
                    class="bg-white w-full py-3 text-black font-bold text-lg cursor-pointer rounded-md"
                    value="{{ __('Register') }}">
            </div>
            <div class="text-center">
                <div class="flex justify-between">
                    <a href="{{ route('login') }}"
                        class="text-[16px] underline text-white font-normal cursor-pointer">Login now</a>
                </div>
            </div>
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const togglePassword = document.querySelector('.toggle-password');
            const passwordField = document.getElementById('password');
            const eyeIcon = togglePassword.querySelector('i');

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
        });
    </script>
</body>
</html>