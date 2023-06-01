package de.neuefische.backend.service;

import de.neuefische.backend.model.Weather;
import de.neuefische.backend.model.WeatherResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Objects;

@Service
public class ServiceWeather {

    WebClient webClient = WebClient.create("https://api.openweathermap.org/data/2.5/weather?lat=21.3069&lon=157.8583&appid=78cf5dedfcd4a63d188233d2779482b3");

    public static int kelvinToCelsius(double kelvin) {
        double celsius = kelvin - 273.15;
        return (int) Math.round(celsius);
    }

    public Weather getTemperature() {
        WeatherResponse response = Objects.requireNonNull(webClient.get())
                .uri("")
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
