import ContactsForm from "@/components/ContactsForm";

export const metadata = {
  title: "Contact us",
  description: "Have a question send us the message",
};

function Contactspage() {
  return (
    <div className="flex flex-col justify-center max-w-[600px] w-full mx-auto">
      <h2 className="font-bold  text-black text-[70px] text-center leading-tight max-sm:text-[30px] p-8 ">
        Contact us
      </h2>

      <ContactsForm />
    </div>
  );
}

export default Contactspage;
