package com.pz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.pz")
public class SpringNextjsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringNextjsApplication.class, args);
	}

}
