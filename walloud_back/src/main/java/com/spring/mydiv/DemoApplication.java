package com.spring.mydiv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class DemoApplication {

	public static final String APPLICATION_LOCATIONS = "spring.config.location="
			+ "classpath:application.properties,"
			+ "classpath:aws.yml";

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
//		new SpringApplicationBuilder(DemoApplication.class)
//				.properties(APPLICATION_LOCATIONS)
//				.run(args);
		System.out.println("Start!");
	}
}
