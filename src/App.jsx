import Page from "./Page";
import { WeatherProvider, FavoriteProvider } from "./providers";
import LocationProvider from "./providers/LocationProvider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
