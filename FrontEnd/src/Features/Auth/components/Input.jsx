import React from "react";

const Input = ({ type, placeholder, sideComponent, value, setState }) => {
  function onchange(e) {
    setState(e.target.value);
  }
  return (
    <div className="flex items-center gap-3 w-full rounded-xl border border-border bg-input px-4 py-3 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
      {sideComponent && (
        <span className="text-text-secondary">{sideComponent}</span>
      )}

      <input
        onChange={(e) => {
          onchange(e);
        }}
        type={type}
        value={value}
        placeholder={placeholder}
      
        className="w-full bg-transparent text-text placeholder:text-muted outline-none"
      />
    </div>
  );
};

export default Input;
