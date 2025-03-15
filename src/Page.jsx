import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./contexts";
import ClimateType from "./enum/ClimateType";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import ShowerRainImage from "./assets/backgrounds/shower-rain.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import SunnyImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { loading, weatherData } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  const getBackgroundImage = (climate) => {
    switch (climate) {
      case ClimateType.RAIN:
        return RainyDayImage;
      case ClimateType.CLOUDS:
        return ScatteredCloudsImage;
      case ClimateType.CLEAR:
        return ClearSkyImage;
      case ClimateType.SNOW:
        return SnowImage;
      case ClimateType.THUNDER:
        return ThunderStormImage;
      case ClimateType.FOG:
        return WinterImage;
      case ClimateType.HAZE:
        return FewCloudsImage;
      case ClimateType.MIST:
        return MistImage;
      default:
        return SunnyImage;
    }
  };

  useEffect(() => {
    const backgroundImage = getBackgroundImage(weatherData?.climate);
    setClimateImage(backgroundImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 mt-14 mx-auto p-8">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${climateImage})` }}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
