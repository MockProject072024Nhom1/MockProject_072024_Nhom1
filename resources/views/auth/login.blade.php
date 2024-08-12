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

<body class="form-v6 h-screen flex justify-center items-center bg-[#2F2E2E]">
    <div class="bg-[#C8C8C8] w-full h-full rounded-lg font-nunito font-bold flex justify-center items-center">
        <form class="form-left bg-[#2F2E2E] p-10 m-20 w-[40%] h-auto flex flex-col justify-center rounded-md shadow-2xl"
            action="{{ route('login') }}" method="POST">
            @csrf
            <h1 class="text-white text-[50px] text-center mb-8">{{ __('LOGIN') }}</h1>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-user "></i>
                <label class="block mb-1 font-normal text-xl text-[#7d8084]"
                    for="email">{{ __('Email Address') }}</label>
            </div>
            <div class="flex flex-col items-start justify-between w-full mb-8">
                <input
                    class="w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md @error('email') is-invalid @enderror"
                    type="text" name="email" id="email" placeholder="Enter your email" value="{{ old('email') }}"
                    required autocomplete="email" autofocus>
                @error('email')
                    <span class="text-white font-thin" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-lock"></i>
                <label class="block mb-1 font-normal text-xl text-[#7d8084]" for="password">{{ __('Password') }}</label>
            </div>
            <div class="flex flex-col items-start justify-between w-full mb-8 relative">
                <span class="toggle-password cursor-pointer">
                    <i class="fa-regular fa-eye-slash text-white absolute top-3 right-3 bottom-0"></i>
                </span>
                <input
                    class=" w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md @error('password') is-invalid @enderror"
                    type="password" name="password" id="password" placeholder="Enter your password" required
                    autocomplete="current-password">
                @error('password')
                    <span class="text-white font-thin" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="flex justify-between mb-8">
                <div>
                    <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                    <label class="text-[16px] text-[#7d8084] font-normal">{{ __('Remember Me') }}</label>
                </div>
                @if (Route::has('password.request'))
                    <a href="{{ route('password.request') }}"
                        class="text-[16px] text-white font-normal">{{ __('Forgot Your Password?') }}</a>
                @endif

            </div>
            <div class="text-center mb-8">
                <input type="submit" name="login"
                    class="bg-white w-full py-3 text-black font-bold text-lg cursor-pointer rounded-md"
                    value="{{ __('Login') }}">
            </div>
            <div class="text-center">
                <div class="flex justify-between">
                    <span class="text-[16px] text-[#7d8084] font-normal">Don't have an account?</span>
                    <a href="{{ route('register') }}"
                        class="text-[16px] underline text-white font-normal cursor-pointer">Create now</a>
                </div>
            </div>
        </form>
        <div class="form-right bg-[#2F2E2E] w-[60%] h-full flex flex-col items-center justify-center p-8">
            <img class="w-1/2 h-auto object-cover" src="src/assets/images/logo.png" alt="form">
            <h1 class="text-4xl font-normal text-[#7d8084] mb-4">Welcome to NSGSecure</h1>
            <h1 class="text-3xl font-normal text-gradient">Enter into a NEW World of Surveillance</h1>
        </div>
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