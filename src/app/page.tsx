import { home_information } from "@/data/data";

export default function Home() {
  return (
    <main className="text-center">
      <h2 className="text-4xl md:text-5xl p-7 font-bold">{home_information.title}</h2>
      <div className="mb-14">
        <h4 className="text-xl md:text-2xl">{home_information.subtitle}</h4>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="card-style w-3/4 md:w-full md:max-w-80 md:mr-7">
          <p>{home_information.card_1} <span className="font-bold">{home_information.card_1_bold}</span></p>
          <p>{home_information.card_1_p2}</p>
        </div>
        <div className="card-style w-3/4 mt-7 md:w-full md:m-0 md:max-w-80">
          <p>{home_information.card_2} <span className="font-bold">{home_information.card_2_bold}</span> {home_information.card_2_p2}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center card-style w-3/4 mb-7 md:mb-0 md:w-full md:max-w-96 mt-7 mx-auto">
        <p>{home_information.card_3} <span className="font-bold">{home_information.card_3_bold}</span></p>
        <p>{home_information.card_3_p2}</p>
      </div>
    </main>
  );
}
