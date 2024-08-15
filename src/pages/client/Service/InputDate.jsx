import React from 'react';

const InputDate = ({ name, id, type }) => {
  return (
    <div class="flex flex-col">
      <label for={id} class="text-black font-semibold text-[18px]">
        {name}
      </label>
      <input
        type={type}
        id={id}
        class="mt-2 block w-full border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-black border-black"
      />
    </div>
  );
};

export default InputDate;
