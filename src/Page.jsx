import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function Page() {
  const { loading } = useContext;

  return (
    <>
      {loading.status ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen">
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
