import React from 'react';

function LinkButton({ url, label }) {
  function handleClick() {
    window.open(url, '_blank');
  }

  const element = (
    <button
      type="button"
      onClick={handleClick}
      className="p-4 rounded justify-center text-white items-center mt-5 bg-gradient-to-r from-pink-400 to-violet-500 hover:from-pink-500 hover:to-yellow-500"
    >
      { label }
    </button>
  );

  return element
}

export default LinkButton;