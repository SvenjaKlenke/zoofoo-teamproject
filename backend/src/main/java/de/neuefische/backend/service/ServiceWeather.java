package de.neuefische.backend.service;

import de.neuefische.backend.model.Weather;
import de.neuefische.backend.model.WeatherConfig;
import de.neuefische.backend.model.WeatherResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Objects;

@Service
public class ServiceWeather {

    private final WebClient webClient = WebClient.create();

    private final WeatherConfig weatherConfig;

    public ServiceWeather(WeatherConfig weatherConfig) {
        this.weatherConfig = weatherConfig;
    }

    public static int kelvinToCelsius(double kelvin) {
        double celsius = kelvin - 273.15;
        return (int) Math.round(celsius);
    }

 /*   public Weather getTemperature() {
        WeatherResponse response =
                Objects.requireNonNull(webClient.get())
                        .uri("")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .retrieve()
                        .toEntity(WeatherResponse.class)
                        .block()
                        .getBody();
        if (response != null) {
            double temperatureInKelvin = response.getMain().getTemp();
            int temperatureInCelsius = kelvinToCelsius(temperatureInKelvin);
            response.getMain().setTemp(temperatureInCelsius);
            return response.getMain();
        }
        throw new NullPointerException("Failed to retrieve temperature data");
    }*/

    public Weather getTemperature() {
        WeatherResponse response = Objects.requireNonNull(webClient.get())
                .uri(weatherConfig.getUrl())
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .toEntity(WeatherResponse.class)
                .blockOptional()
                .orElseThrow(() -> new NullPointerException("Failed to retrieve temperature data"))
                .getBody();
        if (response != null) {
            double temperatureInKelvin = response.getMain().getTemp();
            int temperatureInCelsius = kelvinToCelsius(temperatureInKelvin);
            response.getMain().setTemp(temperatureInCelsius);
            return response.getMain();
        }
        throw new NullPointerException("Failed to retrieve temperature data");
    }


}
