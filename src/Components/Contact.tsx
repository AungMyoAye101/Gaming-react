import Button from "./Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" h-screen w-screen px-10 relative flex justify-center items-center"
    >
      <div className="absolute inset-0 aspect-video -z-10 ">
        <video src="videos/lol-3.mp4" loop autoPlay muted />
      </div>
      <div className="flex flex-col items-center gap-4 text-white">
        <h1 className="font-general text-2xl font-semibold">
          PLay league 0f lengend{" "}
        </h1>
        <Button title="play for free" containerClass="bg-violet-50" />
      </div>
    </section>
  );
};

export default Contact;
