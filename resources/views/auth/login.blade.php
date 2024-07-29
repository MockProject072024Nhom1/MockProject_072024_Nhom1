<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Form-v6 by Colorlib</title>
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- Import tailwind -->
    @vite('resources/css/app.css')
</head>

<body class="form-v6 h-screen flex justify-center items-center bg-[#2F2E2E]">
    <div class="bg-[#2F2E2E] w-full h-full rounded-lg font-nunito font-bold flex">
        <form class="p-40 w-1/2 h-full flex flex-col justify-center" action="#" method="post">
            <h1 class="text-white text-[50px] text-center mb-8">LOGIN</h1>
            <label class="block mb-1 font-normal text-xl text-[#7d8084]" for="email">Email</label>
            <div class="flex items-start justify-between w-full mb-8">
                <input
                    class="w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md"
                    type="text" name="full-name" id="full-name" placeholder="Enter your email" required>
            </div>
            <label class="block mb-1 font-normal text-xl text-[#7d8084]" for="password">Password</label>
            <div class="flex items-start justify-between w-full mb-8">
                <input
                    class="w-full px-3 py-2 bg-[#222121] border border-gray-300 outline-none text-base text-[#7d8084] font-normal rounded-md"
                    type="password" name="password" id="password" placeholder="Enter your password" required>
            </div>
            <div class="flex justify-between mb-8">
                <div>
                    <input type="checkbox">
                    <label class="text-[16px] text-[#7d8084] font-normal">Remember me</label>
                </div>
                <a class="text-[16px] text-[#F31982] font-normal">Forgot Password?</a>
            </div>
            <div class="text-center mb-8">
                <input type="submit" name="login"
                    class="border-gradient bg-[#111111] w-full py-3 text-[#7d8084] font-bold text-lg cursor-pointer" value="Log in">
            </div>
            <div class="text-center">
                <div class="flex justify-between">
                    <span class="text-[16px] text-[#7d8084] font-normal">Don't have an account?</span>
                    <a class="text-[16px] underline text-[#7d8084] font-normal">Create now</a>
                </div>
            </div>
        </form>
        <div class="w-1/2 h-full flex flex-col items-center justify-center p-8">
            <img class="w-1/2 h-auto object-cover" src="src/assets/images/logo.png" alt="form">
            <h1 class="text-4xl font-normal text-[#7d8084] mb-4">Welcome to NSGSecure</h1>
            <h1 class="text-3xl font-normal text-gradient">Enter into a NEW World of Surveillance</h1>
        </div>
    </div>
</body>



</html>