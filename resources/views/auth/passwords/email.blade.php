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
        @if (session('status'))
            <div class="bg-[#00E0FF] p-8 rounded-lg shadow-2xl w-full" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <div class="p-8 rounded-lg shadow-2xl w-full">
            <div class="text-center text-white text-xl font-bold mb-6">
                {{ __('Reset Password') }}
            </div>

            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <div class="mb-6">
                    <label for="email" class="block text-white text-sm font-medium mb-2">
                        {{ __('Email') }}
                    </label>

                    <div>
                        <input id="email" type="email"
                            class="form-input w-full px-4 py-2 rounded-lg @error('email') border-red-500 @enderror"
                            name="email" value="{{ old('email') }}" required autocomplete="email" autofocus
                            style="background-color: #fff;">
                        @error('email')
                            <span class="text-red-500 text-sm mt-2">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="flex justify-center">
                    <button type="submit" class="bg-[#00E0FF] text-black font-bold py-2 px-4 rounded-lg">
                        {{ __('Send Password Reset Link') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>


</html>