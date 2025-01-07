import ContactsForm from "@/components/ContactsForm";

export const metadata = {
  title: "Contact us",
  description: "Have a question send us the message",
};

function Contactspage() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <ContactsForm />
      </div>
      <div className="w-1/2">
        <h2 className="font-bold  text-black text-[70px] max-w-[500px] w-full leading-tight max-sm:text-[30px] p-8 ">
          Contact us
        </h2>
      </div>
    </div>
  );
}

export default Contactspage;
