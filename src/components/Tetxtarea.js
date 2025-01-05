function Tetxtarea({ name, placeholder }) {
  return (
    <textarea
      cols={4}
      className="border-[#4c5663] p-2 border w-full h-[200px] bg-transparent resize-none"
      name={name}
      placeholder={placeholder}
    />
  );
}

export default Tetxtarea;
