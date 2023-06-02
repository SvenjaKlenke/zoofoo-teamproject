package de.neuefische.backend.model;

import lombok.Data;
import org.springframework.context.annotation.Configuration;

@Configuration
@Data
public class WeatherConfig {

    private String url = "https://api.openweathermap.org/data/2.5/weather?lat=21.3069&lon=157.8583&appid=78cf5dedfcd4a63d188233d2779482b3";

}
