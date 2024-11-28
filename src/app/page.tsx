import { GraficLong } from "@/components/ui/graficLong";

import S from "./style.module.css"
import Slider from "@/components/slider/slider";
// import WeatherPage from "@/components/map/weather";
import Map from "@/components/map/map";
import { ChartEart } from "@/components/map/ui/chartEart";

export default function Home() {
  return (
    <>
      <h2 id={S.title_Init}>Sua Agricultura Inteligente Começa Aqui</h2>
      <main id={S.bg} >
      <section>
        <Slider/>
      </section>
      <section className="flex flex-row items-center justify-between">
        <div  id={S.sobreposition_map} >
        <Map/>        
        </div>
        <div  id={S.info_map}>
          <div className="">

            <h2 className="text-xl font-bold text-gray-200 border-b pb-2 pt-3 mb-4">Informações sobre o Clima</h2>

            <div className="flex flex-row items-center justify-between pr-4 pb-5">   
              <span className="text-gray-200 text-lg">Clima: <strong className="text-gray-300">Soleado</strong></span>
              <span  className="text-gray-200 text-lg"> Temperatura: <strong className="text-gray-300">32°C</strong></span>
            </div>
            <span className="text-gray-200 text-lg pt-5"> Local: <strong className="text-gray-300">novo horizonte</strong></span>
            <div className="flex gap-20 pt-5">
              <span className="text-gray-200 text-lg"> Lat: <strong className="text-gray-300">334535345350</strong></span>
              <span className="text-gray-200 text-lg"> Lat: <strong className="text-gray-300" >334535345350</strong></span>
            </div>
          </div>
          <ChartEart/>
        </div>
      </section>
      <section id={S.HomeSectionHistoric}>
        <h2 className="text-3xl font-bold text-[--color-logo]">Historico</h2>
        <GraficLong /> 

      </section>
    </main>
    </>
  );
}
{/**/}