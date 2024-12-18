import AnimateText from "./AnimateText";
import Button from "./Button";
import ImageClipBox from "./ImageClipBox";

const Contact = () => {
  return (
    <section id="contact" className="my-10 min-h-screen w-screen px-10 ">
      <div className="relative rounded-lg bg-black text-blue-50 py-20 md:overflow-hidden ">
        <div className="absolute h-full hidden sm:block w-72 lg:w-96 -left-20 lg:left-20 overflow-hidden">
          <ImageClipBox
            source="/img/contact-1.webp"
            imgStyle="contact-clip-path-1"
          />
          <ImageClipBox
            source="/img/contact-2.webp"
            imgStyle="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            source="/img/swordman-partial.webp"
            imgStyle="absolute md:scale-125"
          />
          <ImageClipBox
            source="/img/swordman.webp"
            imgStyle="sword-man-clip-path md:scale-125 rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimateText
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
