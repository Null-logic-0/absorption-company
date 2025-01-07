import "../../styles/globals.css";

export default function ReviewsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className=" flex-grow flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
