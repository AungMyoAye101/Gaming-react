import { useState } from "react";

const Champions = () => {
  const [cuurentIndex, setCuurentIndex] = useState(0);
  const championsData = [
    {
      id: 1,
      image: "img/Ahri.jpg",
      name: "Ahri",
      description: "Roug Assassian",
      role: "assassian",
    },
    {
      id: 2,
      image: "img/backdrop.webp",
      name: "Backdrop",
      description: "Roug Assassian",
      role: "assassian",
    },
    {
      id: 3,
      image: "img/entrance.webp",
      name: "Entrance",
      description: "Roug Assassian",
      role: "assassian",
    },
  ];
  console.log(`curr ${cuurentIndex} total list ${championsData.length} `);

  const buttonType = {
    previous: "previous",
    next: "next",
    index: "index",
  };

  const currentIndexHandle = (i: number, type: string) => {
    console.log(
      `curr ${cuurentIndex} total list ${championsData.length} and ${i}`
    );
    if (type === buttonType.index) {
      setCuurentIndex(i);
    } else if (type === buttonType.previous) {
      if (i === 0) {
        setCuurentIndex(championsData.length - 1);
      } else {
        setCuurentIndex(i - 1);
      }
    } else if ((type = buttonType.next)) {
      if (i === championsData.length - 1) {
        setCuurentIndex(0);
      } else {
        setCuurentIndex(i + 1);
      }
    } else {
      setCuurentIndex(i);
    }
  };

  return (
    <section className="relative min-h-screen w-screen flex flex-col-reverse md:flex-row  items-center justify-center gap-8 px-4 py-10 ">
      {/* background image */}

      <div className="absolute inset-0 -z-10">
        <img
          src={championsData[cuurentIndex].image}
          alt={championsData[cuurentIndex].name}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className=" w-full md:w-[50%]  flex flex-col items-center gap-4 ">
        <div className=" flex flex-col gap-2 text-3xl font-semibold  text-center uppercase text-violet-50">
          <span>Meet some OF</span>
          <span className="text-7xl font-zentry mt-2">the Champions</span>
        </div>
        <button className="font-general w-fit bg-gold-100 rounded-md px-4 py-3">
          Discover more champions
        </button>
        <div className="flex items-center justify-center gap-6 py-4">
          {championsData.map((champ, i) => (
            <button
              key={champ.id}
              onClick={() => currentIndexHandle(i, buttonType.index)}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={champ.image}
                alt={champ.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="font-general text-violet-50 text-lg ">
                {champ.name}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() =>
              currentIndexHandle(cuurentIndex, buttonType.previous)
            }
            className="bg-violet-50 rounded-lg px-4 py-1.5 font-robert-regular text-sm"
          >
            Pre
          </button>
          <button
            onClick={() => currentIndexHandle(cuurentIndex, buttonType.next)}
            className="bg-violet-50 rounded-lg px-4 py-1.5 font-robert-regular text-sm"
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <img
          src={championsData[cuurentIndex].image}
          alt={championsData[cuurentIndex].name}
          className="w-[500px] h-[500px] rounded-full"
        />
      </div>
    </section>
  );
};

export default Champions;
